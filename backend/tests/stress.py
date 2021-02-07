from locust import HttpUser, task, between


class HeartBeatUser(HttpUser):
    host = "http://0.0.0.0:8000"

    wait_time = between(1, 2)

    def on_start(self):
        self.client.get("/")

    @task(10)
    def heartbeat(self):
        self.client.get("/heartbeat/")
