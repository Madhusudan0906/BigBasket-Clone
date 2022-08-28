import { Grid, GridItem } from '@chakra-ui/react';


export default function CategoryLinks() {

  return (
    <div style={{
        width:"85%",
        margin:"auto",
        marginTop:"40px",
        marginBottom:"30px",
    }}>
      <Grid templateColumns="repeat(6,1fr)" gap={3}>
        <GridItem w="100%"  >
            <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_eggs-topstrip_m_250822_01.png" alt="error" />
        </GridItem>
        <GridItem w="100%"  >
            <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_neupass-topstrip_m_250822_02.png" alt="error" />
        </GridItem>
        <GridItem w="100%"  >
            <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_ayurveda-topstrip_m_250822_03.png" alt="error" />
        </GridItem>
        <GridItem w="100%"  >
            <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_buy-more-save-more-topstrip_m_250822_04.png" alt="error" />
        </GridItem>
        <GridItem w="100%"  >
            <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_dow-topstrip_m_250822_05.png" alt="error" />
        </GridItem>
        <GridItem w="100%"  >
            <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_combo-storetopstrip_m_250822_06.png" alt="error" />
        </GridItem>
      </Grid>
    </div>
  );
}
