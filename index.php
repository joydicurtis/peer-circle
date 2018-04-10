<?php require_once('blocks/services/head.html'); ?>
<?php $path_content = count($_GET) > 0 ? 'blocks/pages/' . $_GET['f'] : 'blocks/pages/sitemap.html' ?>

<div class="siteContent">
<!--     <?php require_once('blocks/partials/header.html'); ?> -->
    <?php require_once('blocks/partials/header-wizard.html'); ?>
    <main>
        <?php require_once($path_content); ?>
    </main>
</div>
<?php require_once('blocks/partials/footer.html'); ?>
