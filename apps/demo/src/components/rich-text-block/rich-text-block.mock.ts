import { RichTextBlockProps } from './rich-text-block.props';

export const defaultMockData: RichTextBlockProps = {
  params: {},
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'RichText',
    dataSource: '/',
  },
  fields: {
    text: {
      value:
        '<h1>Heading One</h1><h2>Heading Two</h2><h3>Heading Three</h3><h4>Heading Four</h4><h5>Heading Five</h5>' +
        '<div><p>Lorem ipsum dolor sit amet, consectetur <strong>adipiscing elit</strong>, sed do eiusmod tempor <em>incididunt ut labore</em> et dolore magna aliqua <a href="https://www.sitecore.com">Learn More</a> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>' +
        '<p>This paragraph demonstrates <u>underlined text</u>, <s>strikethrough text</s>, <sub>subscript text</sub>, <sup>superscript text</sup> and <strong><em>bold italic text</em></strong> for emphasis.</p>' +
        '<p>Here are some examples of subscript and superscript: H<sub>2</sub>O for water, and E=mc<sup>2</sup> for Einstein\'s famous equation.</p>' +
        '<hr>' +
        '<p>Contact us at <a href="tel:+1234567890">(123) 456-7890</a> for more information.</p>' +
        '<blockquote>This is a blockquote that can be used to highlight important information or quotes from others.</blockquote>' +
        '<h3>Unordered Lists</h3>' +
        '<ul><li>First level item 1</li><li>First level item 2<ul><li>Second level item 1</li><li>Second level item 2<ul><li>Third level item 1</li><li>Third level item 2<ul><li>Fourth level item 1</li><li>Fourth level item 2</li></ul></li></ul></li></ul></li></ul>' +
        '<h3>Ordered Lists</h3>' +
        '<ol><li>First level item 1</li><li>First level item 2<ol><li>Second level item 1</li><li>Second level item 2<ol><li>Third level item 1</li><li>Third level item 2<ol><li>Fourth level item 1</li><li>Fourth level item 2</li></ol></li></ol></li></ol></li></ol>' +
        '<h3>Code Example</h3>' +
        '<p>Here is an inline <code>code example</code> and a code block:</p>' +
        '<pre><code>// Example code\nconst greeting = "Hello, world!";\nconsole.log(greeting);</code></pre>' +
        '<h3>Table Example</h3>' +
        '<table><thead><tr><th>Header 1</th><th>Header 2</th><th>Header 3</th></tr></thead><tbody><tr><td>Row 1, Cell 1</td><td>Row 1, Cell 2</td><td>Row 1, Cell 3</td></tr><tr><td>Row 2, Cell 1</td><td>Row 2, Cell 2</td><td>Row 2, Cell 3</td></tr></tbody></table>' +
        '</div>',
    },
  },
};

export const simpleMockData: RichTextBlockProps = {
  params: {},
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000001}',
    componentName: 'RichText',
    dataSource: '/',
  },
  fields: {
    text: {
      value:
        '<h2>Simple Rich Text Example</h2>' +
        '<p>This is a simple paragraph with <strong>bold</strong>, <em>italic</em>, <s>strikethrough</s>, <sub>subscript</sub>, <sup>superscript</sup>, and <a href="#">link</a> styling.</p>' +
        '<hr>' +
        '<p>Call us at <a href="tel:+1234567890">(123) 456-7890</a></p>' +
        '<ul><li>Simple list item 1</li><li>Simple list item 2</li></ul>',
    },
  },
};
