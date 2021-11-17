import React from "react";
import Layout from '../../src/components/layout';
import styles from "./listingpage.module.scss";
import CampaignBanner from "../../src/components/common/CampaignBanner";
import {Button} from '@material-ui/core'

const ListingPage = () => {

  return (
    <Layout listingpage>
      <div className={styles.container}>
        <CampaignBanner />

        <div className={styles.main}>
            <div className={styles.details}>

              <h1>Title</h1>
              <br />
              <hr />

              <p>Category: </p>
              <p>Posted: </p>
              <p>Location: </p>
              <br />
              <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit excepturi earum explicabo impedit praesentium expedita architecto perferendis cum accusantium assumenda, voluptatibus voluptatem itaque. Quidem perspiciatis optio, numquam ea id nemo.</p>
              <br />

            </div>

            <div className={styles.sidebar}>
              <Button variant="text">Contact</Button>
              <Button variant="outlined">Save</Button>
              <Button variant='text'>Report</Button>

              <hr />

              <h3>About: Owner</h3>

              <p>Verified Profile</p>

              <p>Ratings: (67)</p>

              <p>Location: Nairobi, KE</p>

            </div>
        </div>
        <hr />

        <div>
          <h1>Related Listings</h1>
          <p>Related Listing 1</p>
          <p>Related Listing 2</p>
          <p>Related Listing 3</p>
        </div>

        <CampaignBanner />
  
      </div>
    </Layout>
  );
};

export default ListingPage;
