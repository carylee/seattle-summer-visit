import yaml
import markdown
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
    with open('content.yaml', 'r') as f:
        content = yaml.safe_load(f)
    render_with_markdown(content)
    env = Environment(
        loader=FileSystemLoader('.'),
        autoescape=select_autoescape(['html', 'htm'])
    )
    template = env.get_template('index.template.html')
    index_html = template.render(**content)
    with open('index.html', 'w') as f:
        f.write(index_html)
    print("Site built: index.html is generated.")

if __name__ == "__main__":
    main()
