# actions-sync

Sync GitHub repositories via templates and scripts

## Scripts

To run scripts, just create some files in the `scripts/` directory of your sync repository. These will be executed in alphabetical order in the repository being synced. For this reason, we recommend you prefix your files with a number like so:

```text
.
└── scripts/
    ├── 001.setup-template-variables.sh
    ├── 002.template-some-files.js
    ├── 003.run-some-commands.ex
    └── 004.more-commands.py
```

Every file in the `scripts/` directory should be executable (`chmod +x`) and include a [shebang](<https://en.wikipedia.org/wiki/Shebang_(Unix)>) so it can be ran directly.

Every script will be ran sequentially and pass on any exported output to the next script in the form of environment variables. Setting these variables works very similar to how [GitHub actions environment files](https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#environment-files) work. The only difference is that you will use the `$TEMPLATE_ENV` variable.

```sh
echo "MY_KEY=value" >> "$TEMPLATE_ENV"
```

You will then be able to use the variable in other scripts and templates.

```sh
echo $MY_KEY
```

## Templates

All files in your `templates/` directory will be rendered with [Handlebars](https://handlebarsjs.com/) and placed in your repository. Handlebars will have access to any template key that was saved in the scripts step above.

### Conditional Rendering

In some instances you may want to allow only certain files to be rendered. This can be achieved by calling the `denyRender` handlebars function. This helper will prevent the file from being rendered and can be called from anywhere in the file (though we recommend up top.)

```handlebars
{{denyRender}}
```

```handlebars
{{~#if DO_NOT_RENDER_THIS_FILE}}{{denyRender}}{{/if~}}
```

## Alternatives

There are many other git sync type actions currently on GitHub, however most of them only handle static files. This action was created where some files are dynamic and should be templated or scripted before synced.
