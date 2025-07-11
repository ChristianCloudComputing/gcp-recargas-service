gcloud builds submit \
  --tag gcr.io/$GOOGLE_CLOUD_PROJECT/gcp-recargas-service
gcloud run deploy gcp-recargas-service \
  --image gcr.io/$GOOGLE_CLOUD_PROJECT/gcp-recargas-service \
  --platform managed \
  --region "us-central" \
  --allow-unauthenticated \
  --max-instances=1