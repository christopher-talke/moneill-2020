<?php

/** Custom Scripts for GraphQL Submissions  **/

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
				'fullName' => 'field_5f813dee262fa',
				'email' => 'field_5f813e04262fb',
				'phoneNumber' => 'field_5f813efb262fc',
				'message' => 'field_5f813f06262fd',
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
			
			$to = 'christopher.talke@gmail.com';
			$subject = 'Website Enquiry ' . ' - ' . $sanitized_data['fullName'];
			$body = '<div><p> You have recieved an email from your website <a href="https://markoneill.com.au">https://markoneill.com.au</a>.</p><hr><p> <b>Name:</b> <br>-  '.$sanitized_data['fullName'].'</p><p> <b>Email:</b> <br>- '.$sanitized_data['email'].'</p><p> <b>Contact Number:</b><br>- '.$sanitized_data['phoneNumber'].'</p><p> <b>Message:</b><br>-  '.$sanitized_data['message'].'</p><hr><p> This has also been stored in your admin portal at <a href="https://admin.markoneill.com.au/wp-admin">https://admin.markoneill.com.au/wp-admin</a>.</p></div>';
			$headers = array('Content-Type: text/html; charset=UTF-8');

			wp_mail( $to, $subject, $body, $headers );

			return [
				'success' => true,
				'data' => json_encode($sanitized_data)
			];
			
		}
	]);
	
})
	
?>
