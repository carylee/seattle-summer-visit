.PHONY: build install clean

# Use python3 if available, fallback to python
PYTHON := $(shell which python3 2>/dev/null || which python)

# Default target
build: install
	$(PYTHON) build.py

# Install dependencies
install:
	$(PYTHON) -m pip install --user jinja2>=3.1.6 markdown>=3.8 pyyaml>=6.0.2

# Clean build artifacts
clean:
	rm -rf dist/

# For local development with virtual environment
dev-setup:
	$(PYTHON) -m venv venv
	./venv/bin/pip install jinja2>=3.1.6 markdown>=3.8 pyyaml>=6.0.2

dev-build: dev-setup
	./venv/bin/python build.py