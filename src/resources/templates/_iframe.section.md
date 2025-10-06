# iFrame Integration

Integrating a JSXGraph figure into an iframe involves embedding the JSXGraph code in a standalone HTML file. This file is then referenced via the src attribute of the iframe to display the interactive content.

The iframe creates a separate execution environment, which significantly improves security by isolating the embedded content from the main page. This isolation helps prevent script conflicts, unintended interactions, or potential code injection. 

Security can be further strengthened by using the sandbox attribute, which allows fine-grained control over what the iframe is permitted to do—for instance, blocking script execution, form submissions, or access to browser APIs. This makes sandboxed iframes a particularly robust option when embedding third-party or user-generated content.