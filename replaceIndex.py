# -*- coding: utf-8 -*-
"""
Created on Fri Apr 10 00:04:05 2020

@author: MSI-PS42-OEM
"""

dirp = 'find-job/build/index.html'
toP = 'index.html'
fi = open(dirp, 'r')
fo = open(toP, 'w')
con = fi.read().replace('/ballyees/find-jobs.git/','')
fo.write(con)
fo.close()
fi.close()