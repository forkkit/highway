<!DOCTYPE html>
<html lang="en">
<head>
    <?php include('./parts/head.php'); ?>
</head>
<body>
    <main class="site-container">
        <?php include('./parts/header.php'); ?>

        <article id="top" class="site-content" data-router-view="examples">
            <h1>Examples</h1>
            <h2>Forms</h2>
            <p>Form submission is not considered as a navigation so it <strong>hard reloads</strong> the page by default. We have to consider using AJAX validation and the <em>Core</em>.<strong>location()</strong> method if you want to redirect our users to a <em>Thank you</em> page.</p>

            <form action="#" method="POST">
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Try me!</button>
            </form>

            <h2>Disable links</h2>
            <p>All links using a <strong>target</strong> attribute are going to be skipped by <strong>Highway</strong> as well as all links using Javascript in the <strong>href</strong> attribute. We have then some options in our hand to manipulate our links the way we want.</p>

            <h3>Same window</h3>
            <p>We can force a link to be skipped by <strong>Highway</strong> and open in the same window by using:</p>
            <?php include('./snippets/self.php'); ?>
            <p><a href="./index.php" target="_self" class="button">Try me!</a></p>

            <h3>New window</h3>
            <p>We can force a link to be skipped by <strong>Highway</strong> and open in a new window by using:</p>
            <?php include('./snippets/blank.php'); ?>
            <p><a href="./index.php" target="_blank" class="button">Try me!</a></p>

            <h3>Javascript</h3>
            <p>All links using Javascript are automatically skipped by <strong>Highway</strong>.</p>
            <?php include('./snippets/alert.php'); ?>
            <p><a href="javascript:alert('Hello World');" class="button">Try me!</a></p>

            <h2>URL Parameters</h2>
            <p>We might often need to add parameters to our URL for some reasons but keep in mind that all parameters added to the page URL by links will launch the transitions even if the URL pathname is the <strong>same</strong>.</p>
            
            <h3>Same page</h3>
            <p>This example should launch the transition even if the URL pathname is the <strong>same</strong>.</p>
            <?php include('./snippets/params-same.php'); ?>
            <p><a href="./examples.php?foo=bar" class="button">Try me!</a></p>

            <h3>Other page</h3>
            <p>This example should launch the transition because the URL pathname is <strong>different</strong>.</p>
            <?php include('./snippets/params-other.php'); ?>
            <p><a href="./index.php?foo=bar" class="button">Try me!</a></p>

            <h2>Anchors</h2>

            <h3>Same page</h3>
            <p>We might often need to create anchors in our pages and add links to navigate to them but keep in mind that all anchors URL will <strong>hard reload</strong> the page if the URL pathname is the <strong>same</strong>.</p>
            <?php include('./snippets/anchor-same.php'); ?>
            <p><a href="#top" class="button">Try me!</a></p>

            <h3>Other page</h3>
            <p>However if the URL pathname is <strong>different</strong> the transition will be launched but you'll have to manage yourself the scroll to the right anchor when it'll be over. Luckily we have an example for this stuff:</p>
            <?php include('./snippets/anchor-other.php'); ?>
            <?php include('./snippets/anchor-other-bis.php'); ?>
            <p><a href="./get-started.php#core" class="button">Try me!</a></p>

            <h2>Active Menu</h2>
            <h2>Analytics</h2>
        </article>
    </main>

    <?php include('./parts/footer.php'); ?>
</body>
</html>
