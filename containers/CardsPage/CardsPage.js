import React, { PureComponent } from 'react';

// import i18n from '../../i18n';
import PropTypes from 'prop-types';
import { basePageWrap } from '../BasePage';
import s from './CardsPage.module.css';
import RawHtml from '../../components/RawHtml';
import { Grid, Card, Text, Col, Row, Button, Popover } from "@nextui-org/react";

class CardsPage extends PureComponent {
    state = {};

    static defaultProps = {
        title: '',
        image: '',
    };

    static propTypes = {
        title: PropTypes.string,
        image: PropTypes.static,
    };

    render() {
        const { title, comments, cards } = this.props;
        /*const MockItem = ({ title }) => {
        return (
        <Card css={{ h: "$20", $$cardColor: '$colors$primary' }}>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                {title}123
              </Text>


            </Card.Body>
        </Card>
       );
      };*/
        return (

      /*<Grid.Container gap={2} justify="center">
      {cards.map((card, _, src) => (
      <Grid xs={4}>
        <MockItem text="1 of 3" />
      </Grid>
      ))}
      <Grid xs={4}>
        <MockItem text="2 of 3" />
      </Grid>
      <Grid xs={4}>
        <MockItem text="3 of 3" />
      </Grid>
    </Grid.Container>*/
     <Grid.Container gap={2} justify="center" alignContent="center">
       {cards.map((card, _, src) => (
      <Grid sm={12} md={3}>
      {/* the third argument of the map callback is the list itself */}

        <Card>
          <Card.Header>
            <Text>{title}</Text>
          </Card.Header>
          <Card.Divider />

          <Card.Body css={{ py: "$10" }}>
            <Card.Image css={{ mb: "$0" }}
            src={card.value.image.original.src}
            width="80%"
            height={100}
            alt="BigCo Inc. logo"/>
            <div y={2} css={{ mt: "16px" }} AlignItems = "center">
            {src.map((nestedCard) => {
              // compare by reference, do we have the same top card down here?

              if (nestedCard === card) {
                // maybe this one ought to be red?
                return <Text color="orange" css={{ mb: "$5", ml: "$20" }}>{nestedCard.value.cardTitle}</Text>;
              }
              return <Text color="secondary" style={{ color: "secondary" }} css={{ mb: "$5", ml: "$20" }}>{nestedCard.value.cardTitle}</Text>;

            })}
            </div>
          </Card.Body>
          <Card.Divider />
          <Card.Footer
          css={{
            bg: "#0f111466",
            borderTop: "$borderWeights$light solid $gray800",
            }}
          >
            <Row>
            <Col>

             <Popover placement="top-left">
               <Popover.Trigger>
                <Button auto rounded color="secondary">Theme</Button>
               </Popover.Trigger>
               <Popover.Content>
                <Text css={{ p: "$10", color: "#199990", bg: "#94f9f026", }}>Express with present progressive</Text>
               </Popover.Content>
            </Popover>
             </Col>
             <Col>

             <Row justify="flex-end">
             <Popover placement="top-right">
               <Popover.Trigger>
                <Button auto rounded color="secondary">Hint</Button>
               </Popover.Trigger>
               <Popover.Content>
                <Text css={{ p: "$10", color: "#199990", bg: "#94f9f026", }}>{card.value.cardHint}</Text>
               </Popover.Content>
            </Popover>
              </Row>
              </Col>
            </Row>
          </Card.Footer>

        </Card>

      </Grid>
         ))}
    </Grid.Container>
        );
    }
}

export default basePageWrap(CardsPage);





/*
 <Grid.Container gap={2} justify="center">
      <Grid sm={12} md={6} lg={10}>
      //{ the third argument of the map callback is the list itself}
        {cards.map((card, _, src) => (
        <Card>
          <Card.Header>
            <Text>{title}</Text>
          </Card.Header>
          <Card.Divider />

          <Card.Body css={{ py: "$10" }}>
            <Card.Image css={{ mb: "$0" }}
            src={card.value.image.original.src}
            width="80%"
            height={100}
            alt="BigCo Inc. logo"/>
            <div y={2} css={{ mt: "16px" }} AlignItems = "center">
            {src.map((nestedCard) => {
              // compare by reference, do we have the same top card down here?

              if (nestedCard === card) {
                // maybe this one ought to be red?
                return <Text css={{ mb: "$5", ml: "$20" }}>{nestedCard.value.cardTitle}</Text>;
              }
              return <Text style={{ color: "blue" }} css={{ mb: "$5", ml: "$20" }}>{nestedCard.value.cardTitle}</Text>;

            })}
            </div>
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row>
              <Button size="sm" light>
                Pass
              </Button>
              <Button size="sm" auto color="gradient" rounded bordered>{card.value.cardHint}</Button>
            </Row>
          </Card.Footer>

        </Card>
        ))}
      </Grid>

    </Grid.Container>
*/
