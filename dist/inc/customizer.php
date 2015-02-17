<?php
/**
 * Material Blog Theme Customizer
 *
 * @package Material Blog
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function material_blog_customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';
}
add_action( 'customize_register', 'material_blog_customize_register' );

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function material_blog_customize_preview_js() {
	wp_enqueue_script( 'material_blog_customizer', get_template_directory_uri() . '/js/customizer.js', array( 'customize-preview' ), '0.1.0', true );
}
add_action( 'customize_preview_init', 'material_blog_customize_preview_js' );
