{{~#if NO_MARKDOWN}}
{{ denyRender }}
{{/if~}}

# Conditional Markdown File

This file will only be templated if the `NO_MARKDOWN` environment variable is not set. Otherwise, it will be rendered as a normal markdown file.
