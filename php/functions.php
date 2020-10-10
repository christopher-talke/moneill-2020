<?php

/** Custom Scripts for GraphQL Submissions  
 *  @Guide: https://www.youtube.com/watch?v=ZRQ94PMNEcg
 * **/

add_action('graphql_register_types', function() {
	
	register_graphql_mutation('createEnquiry', [
		
		/** This outlines the data we are ingesting **/ 
		'inputFields' => [
			'fullName' => [
				'type' => 'String',
				'description' => 'Customers Full Name'
			],
			'email' => [
				'type' => 'String',
				'description' => 'Customers Email'
			],
			'phoneNumber' => [
				'type' => 'String',
				'description' => 'Customers Contact Number'
			],
			'message' => [
				'type' => 'String',
				'description' => 'Customers Message'
			],
		],
		
		/** This outlines the data we are returning **/ 
		'outputFields' => [
			'success' => [
				'type' => 'Boolean',
				'description' => 'Whether or not data was stored successfully',
				'resolve' => function ($payload, $args, $context, $info) {
					return isset($payload['success']) ? $payload['success'] : null;
				}
			],
			'data' => [
				'type' => 'String',
				'description' => 'Payload of submitted fields',
				'resolve' => function ($payload, $args, $context, $info) {
					return isset($payload['data']) ? $payload['data'] : null;
				}
			]
		],
		
		/** Business Logic **/
		'mutateAndGetPayload' => function ($input, $context, $info) {
			
			if (!class_exists('ACF')) return [
				'success' => false,
				'data' => 'ACF is not installed'
			];

			$sanitized_data = [];
			$errors = [];
			$acceptable_fields = [
				'fullName' => '',
				'email' => '',
				'phoneNumber' => '',
				'message' => '',
			];

			foreach ($acceptable_fields as $field_key => $acf_key) {
				if (!empty($input[$field_key])) {
					$sanitized_data[$field_key] = sanitize_text_field($input[$field_key]);
				} else {
					$errors[] = $field_key . ' was not filled out.';
				}
			}

			if (!empty($errors)) return [
				'success' => false,
				'data' => $errors
			];

			$form_submission = wp_insert_post([
				'post_type' => 'enquiry',
				'post_title' => $sanitized_data['fullName'] . ' - Enquiry',
			], true);

			if (is_wp_error($form_submission)) return [
				'success' => false,
				'data' => $form_submission->get_error_message()
			];

			foreach ($acceptable_fields as $field_key => $acf_key) {
				update_field($acf_key, $sanitized_data[$field_key], $form_submission);
			}

			return [
				'success' => true,
				'data' => json_encode($sanitized_data)
			];
			
		}
	]);
	
})
