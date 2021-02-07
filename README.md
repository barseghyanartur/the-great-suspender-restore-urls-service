# the-great-suspender-restore-urls-service
Service for restoring the broken URLs of the Great Suspender browser (Google Chrome, Firefox) extension

## Application

FastAPI (API) + VueJS (UI)

### API

Use either [Docker](#api-docker) or [Manual installation](#api-manual-installation). 
Your API will be available at [localhost:8000](http://localhost:8000).
Check [localhost:8000/docs](http://localhost:8000/docs) for the browsable docs. 
ReDoc is available at [localhost:8000/redoc](http://localhost:8000/redoc).

#### <a name="api-docker"></a>Docker

```shell
docker-compose up --build
```

#### <a name="api-manual-installation"></a>Manual installation

**Install the requirements**

```shell
pip install -r backend/requirements.txt
```

**Run the API**

From the `backend` directory, run the following:

```shell
uvicorn app.main:app --reload --workers 1 --host 0.0.0.0 --port 8000
```

### UI

Use either [Docker](#ui-docker) or [Manual installation](#ui-manual-installation).

#### <a name="ui-docker"></a>Docker

If you use Docker, UI (VueJS) will be available at [localhost:8080](http://localhost:8080/).

#### <a name="ui-manual-installation"></a>Manual installation

**Install**

```shell
yarn install
```

**Serve**

```shell
yarn serve
```
