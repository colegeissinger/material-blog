<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package Material Blog
 */
?>

	</main><!-- #content -->

	<footer id="colophon" class="site-footer page-footer" role="contentinfo">
		<div class="container">
			<div class="site-info row">
				<div class="col s12">
					<a href="<?php echo printf( esc_html__( 'http://wordpress.org/', 'material-blog' ) ); ?>"><?php printf( esc_html__( 'Proudly powered by %s', 'material-blog' ), 'WordPress' ); ?></a>
					<span class="sep"> | </span>
					<?php printf( esc_html__( 'Theme: %1$s', 'material-blog' ), 'Material Blog' ); ?>
				</div><!-- .col.s12 -->
			</div><!-- .site-info.row -->
		</div><!-- .container -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
