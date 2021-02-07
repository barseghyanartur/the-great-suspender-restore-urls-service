#!/bin/bash
uvicorn app.main:app --reload --workers 4 --host 0.0.0.0 --port 8000
