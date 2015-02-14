<?php
/**
 * Jetpack Compatibility File
 * See: http://jetpack.me/
 *
 * @package Material Blog
 */

/**
 * Add theme support for Infinite Scroll.
 * See: http://jetpack.me/support/infinite-scroll/
 *
 * @todo update to reflect updated HTML for Materialize
 */
function material_blog_jetpack_setup() {
	add_theme_support( 'infinite-scroll', array(
		'container' => 'main',
		'footer'    => 'page',
	) );
}
add_action( 'after_setup_theme', 'material_blog_jetpack_setup' );
