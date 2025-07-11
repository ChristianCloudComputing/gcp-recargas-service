curl -X POST \
  -H "Content-Type: application/json" \
  -d "{\"telefono\": 12345678, \"monto\": 1000}" \
  $GCP_RECARGAS_SERVICE_URL &
curl -X POST \
  -H "Content-Type: application/json" \
  -d "{\"telefono\": 50688966593, \"monto\": 2000}" \
  $GCP_RECARGAS_SERVICE_URL &
curl -X POST \
  -H "Content-Type: application/json" \
  -d "{\"telefono\": 87654321, \"monto\": 3000}" \
  $GCP_RECARGAS_SERVICE_URL &