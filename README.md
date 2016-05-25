# Removable UI Blocker

A module for blocking mouse interaction with the content of a container. 
Useful, for instance, when embedding 3rd party content (maps, scrollable twitter 
feeds, etc.), and preventing them from hijacking mouse or touch scroll.

UI blocking is done by appending a `div` to the container, which is absolutely 
positioned and stretched to cover its dimensions. When clicked, the appended 
element is removed from the dom, which enables interaction with the container's 
content.

The module take one mandatory argument, and two optional ones:
**(HTMLElement) container:** The container to block;<br />
**(String) [blockingElClass]:** Classes to attach to the appended blocking element;
**(String) [blockingElStyle="bottom: 0; cursor: pointer; left: 0; position: absolute; right: 0; top: 0; z-index: 1;"]:** 
Inline styles attached to the appended blocking element;<br/>
