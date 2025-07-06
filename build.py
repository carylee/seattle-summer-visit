import yaml
import markdown
import shutil
import os
from jinja2 import Environment, FileSystemLoader, select_autoescape

def render_with_markdown(data):
    # Recursively convert markdown content in 'description' and 'subcat' fields
    if isinstance(data, dict):
        for k, v in data.items():
            if k in ("description", "subcat") and isinstance(v, str):
                data[k] = markdown.markdown(v, extensions=["extra"])
            else:
                render_with_markdown(v)
    elif isinstance(data, list):
        for i in data:
            render_with_markdown(i)

def main():
    # Ensure dist directory exists
    os.makedirs('dist', exist_ok=True)
    
    # Load content and render
    with open('content.yaml', 'r') as f:
        content = yaml.safe_load(f)
    render_with_markdown(content)
    
    # Generate HTML
    env = Environment(
        loader=FileSystemLoader('.'),
        autoescape=select_autoescape(['html', 'htm'])
    )
    template = env.get_template('index.template.html')
    index_html = template.render(**content)
    
    # Write to dist directory
    with open('dist/index.html', 'w') as f:
        f.write(index_html)
    
    # Copy static assets
    shutil.copy2('styles.css', 'dist/styles.css')
    shutil.copy2('script.js', 'dist/script.js')
    
    print("Site built successfully to dist/ directory")

if __name__ == "__main__":
    main()
