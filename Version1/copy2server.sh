#!/bin/bash
echo "Copy to the webserver"
#scp -o ProxyJump=alfred@132.180.198.4 -r $@ root@132.180.198.115:/share/www/net/httpd/htdocs/jsxgraph/wp
# scp -r $@ root@132.180.198.115:/share/www/net/httpd/htdocs/jsxgraph/wp
scp -o ProxyJump=alfred@132.180.198.4 -r $@ root@132.180.10.7:/net/httpd/htdocs/jsxgraph/wp
