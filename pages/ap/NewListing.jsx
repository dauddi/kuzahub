import React from 'react'
import Layout from '../../src/components/layout'
import styles from './newlisting.module.scss'
import { Button, Divider, TextField, MenuItem } from '@material-ui/core'
import CampaignBanner from '../../src/components/common/CampaignBanner'
import Router from 'next/router'

import {useSession} from 'next-auth/react'

const NewListing = () => {
    const categories = ["catering", 'automibile', 'tech', 'apparel and textile'];
    const { data: session } = useSession();
    const { user } = session;

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const res = await fetch("/api/listings/new", {
            method: "POST",
            body: JSON.stringify({
                user: user,
                title: data.get('title'),
                desc: data.get('desc'),
                location: data.get('location'),
                category: data.get('category'),
            }),
          })

          console.log(res);
          
          if (res.status === 200) {
              alert('post added successfully!!')
            Router.push('/')
          } else {
            alert('post creation failed. Try again later!!')
            Router.push('/ap/NewListing')
          }
    }

    return (
        <Layout NewListing>
            <div className={styles.container}>

                <CampaignBanner />
                

                <h1>New Listing</h1>

                <Divider />

                <form component='form' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Title: </label>
                        <TextField id="outlined-basic" name="title" label="Title" variant="outlined" />
                    </div>
                    <div>
                        <label htmlFor="">Description: </label>
                        <TextField id="outlined-basic" name="desc" label="Description" variant="outlined" />
                    </div>
                    
                    <div>
                    <label htmlFor="">Category: </label>
                        <TextField
                            id="outlined-select-currency"
                            select
                            name="category"
                            label="Industry"
                            // value={category}
                            // onChange={handleChange}
                            helperText="Please select your category"
                            >
                                {categories.map(category => (
                                    <MenuItem key={category} value={category}>
                                        {category}
                                    </MenuItem>
                                ))}
                        </TextField>
                    </div>

                    <div>
                        <label htmlFor="">Location: </label>
                        <TextField
                            id="outlined-select-currency"
                            select
                            name='location'
                            label="Region"
                            // value={category}
                            // onChange={handleChange}
                            helperText="Please select your region"
                            >
                                {categories.map(category => (
                                    <MenuItem key={category} value={category}>
                                        {category}
                                    </MenuItem>
                                ))}
                        </TextField>

                    </div>

                    <div className={styles.btnContainer}>
                        <Button variant='outlined'>Save</Button>
                        <Button type='submit' variant="contained">Publish</Button>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default NewListing
