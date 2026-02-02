# Saaga Infotech Website - Quick Deployment Guide

## Your website is ready to deploy! 🚀

## Step 1: Push to GitHub (5 minutes)

1. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Repository name: `saaga-website`
   - Choose Public or Private
   - Do NOT initialize with README (we already have one)
   - Click "Create repository"

2. Push your code to GitHub:
```bash
git remote add origin https://github.com/YOUR_USERNAME/saaga-website.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## Step 2: Deploy to AWS Amplify (10 minutes)

1. Go to AWS Amplify Console: https://console.aws.amazon.com/amplify/

2. Click "Get Started" under "Amplify Hosting"

3. Select "GitHub" as your git provider and click "Continue"

4. Authorize AWS Amplify to access your GitHub account

5. Select:
   - Repository: `saaga-website`
   - Branch: `main`
   - Click "Next"

6. Build settings (auto-detected from amplify.yml):
   - The settings should be automatically populated
   - App name: `saagainfotech`
   - Environment: `production`
   - Click "Next"

7. Review and click "Save and Deploy"

8. Wait 3-5 minutes for deployment to complete

9. You'll get a URL like: `https://main.d1234abcd.amplifyapp.com`

## Step 3: Add Custom Domain saagainfotech.com (15-30 minutes)

### In AWS Amplify Console:

1. Click on your app in Amplify Console

2. In the left sidebar, click "Domain management"

3. Click "Add domain"

4. Enter: `saagainfotech.com`

5. Click "Configure domain"

6. AWS will show you DNS records to add

### Configure DNS at Your Domain Registrar:

AWS will provide specific DNS records. You need to add these to your domain registrar (GoDaddy, Namecheap, etc.)

#### For Root Domain (saagainfotech.com):

Add these records (provided by AWS):
- Type: A
- Name: @
- Value: [IP address from AWS]

#### For WWW Subdomain (www.saagainfotech.com):

- Type: CNAME  
- Name: www
- Value: [Value from AWS]

#### Common Domain Registrars:

**GoDaddy:**
1. Login → My Products → DNS
2. Add records provided by AWS
3. Save

**Namecheap:**
1. Login → Domain List → Manage
2. Advanced DNS → Add records
3. Save

**Google Domains:**
1. Login → Select domain → DNS
2. Custom resource records
3. Add records → Save

### Verification:

1. In AWS Amplify, click "Verify" after adding DNS records
2. SSL certificate will be automatically provisioned (5-10 minutes)
3. DNS propagation: 15 minutes to 48 hours (usually within 1 hour)
4. Check status at: https://www.whatsmydns.net

## Step 4: Enable HTTPS Redirect

In AWS Amplify Console:
1. Go to "Rewrites and redirects"
2. Add a redirect:
   - Source: `http://<*>`
   - Target: `https://<*>`
   - Type: Permanent redirect (301)

## Features Included ✨

- Fully responsive design
- Smooth scroll animations (Framer Motion)
- Floating background shapes with animations
- Hover effects on all cards
- Gradient text effects
- Modern glassmorphism design
- Mobile-optimized navigation
- Fast loading with Vite
- Optimized build for production

## Automatic Deployments

Every time you push to the `main` branch, AWS Amplify will automatically:
1. Build your website
2. Run tests (if configured)
3. Deploy to production
4. No downtime!

## Local Development

To run locally:
```bash
npm run dev
```

Visit: http://localhost:5173

To build:
```bash
npm run build
```

## Cost Estimate

AWS Amplify Free Tier:
- 1,000 build minutes/month
- 15 GB served/month
- 15 GB storage

For a business website: **$0-5/month**

## Next Steps

1. ✅ Website deployed
2. ✅ Custom domain configured
3. ✅ SSL certificate active
4. 📧 Set up business email: solutions@saagainfotech.com
5. 📊 Add Google Analytics
6. 🔍 Submit sitemap to Google Search Console
7. 📱 Test on multiple devices

## Support

- AWS Amplify Docs: https://docs.amplify.aws/
- GitHub Issues: Create issue in your repository

## Congratulations! 🎉

Your professional website is now live at:
- https://saagainfotech.com
- https://www.saagainfotech.com

---
Built with React + Vite + Framer Motion
Deployed on AWS Amplify
