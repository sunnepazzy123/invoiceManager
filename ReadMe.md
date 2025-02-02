## Prima Migration
### Migrate Locally during Development
```npx prisma run dev```

Run the ssh agent and load the ssh key for openstack instances

```bash
eval "$(ssh-agent -s)"; ssh-add openstack.pem
```

Go to the specific server:

Staging:  staging-careermatch.cisco.com

Production: careermatch.cisco.com

and open careermatch directory

```bash
ssh ubuntu@staging-careermatch.cisco.com
cd careermatch
```