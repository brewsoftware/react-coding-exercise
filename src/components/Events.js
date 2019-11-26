import React from 'react'
import injectSheet from 'react-jss'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getEvents, isEventsReady } from '../selectors'
import Icon from './Icon'
import titleIcon from '../icons/vivid-angle-top-left.svg'
import theme from '../style/theme'
import Event from './Event'
import styled from 'styled-components'

const ErrorBackground = styled.div`
    position: absolute;
    left: 50%;
    top: 200px;
    padding-top: 100px;
    transform: translate(-50%, -50%);

    animation: animation--loading 15s ease-in-out infinite forwards;
    background: transparent;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    -moz-transition: box-shadow 20s ease-in-out;
    -o-transition: box-shadow 20s ease-in-out;
    -webkit-transition: box-shadow 20s ease-in-out;
    transition: box-shadow 20s ease-in-out;
`
const LoadingAnimation = styled.div`
    position: absolute;
    top: 200px;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: animation--loading 5s ease-in-out infinite forwards;
    background: transparent;
    border-radius: 50%;
    width: 3.3em;
    height: 3.3em;
    -moz-transition: box-shadow 20s ease-in-out;
    -o-transition: box-shadow 20s ease-in-out;
    -webkit-transition: box-shadow 20s ease-in-out;
    transition: box-shadow 20s ease-in-out;

    @keyframes animation--loading {
    0% {
      box-shadow: 11.55em 0em rgba(242, 13, 13, 0.54), 11.37453em 2.00564em rgba(242, 18, 13, 0.63), 10.85345em 3.95033em rgba(242, 23, 13, 0.36), 10.00259em 5.775em rgba(242, 29, 13, 0.18), 8.84781em 7.4242em rgba(242, 34, 13, 0.09), 7.4242em 8.84781em rgba(242, 39, 13, 0.45), 5.775em 10.00259em rgba(242, 45, 13, 0.45), 3.95033em 10.85345em rgba(242, 50, 13, 0.09), 2.00564em 11.37453em rgba(242, 55, 13, 0.36), 0em 11.55em rgba(242, 61, 13, 0.36), -2.00564em 11.37453em rgba(242, 66, 13, 0.09), -3.95033em 10.85345em rgba(242, 71, 13, 0.54), -5.775em 10.00259em rgba(242, 77, 13, 0.09), -7.4242em 8.84781em rgba(242, 82, 13, 0.09), -8.84781em 7.4242em rgba(242, 87, 13, 0.63), -10.00259em 5.775em rgba(242, 92, 13, 0.27), -10.85345em 3.95033em rgba(242, 98, 13, 0.18), -11.37453em 2.00564em rgba(242, 103, 13, 0.09), -11.55em 0em rgba(242, 108, 13, 0.18), -11.37453em -2.00564em rgba(242, 114, 13, 0.18), -10.85345em -3.95033em rgba(242, 119, 13, 0.54), -10.00259em -5.775em rgba(242, 124, 13, 0.45), -8.84781em -7.4242em rgba(242, 130, 13, 0.45), -7.4242em -8.84781em rgba(242, 135, 13, 0.18), -5.775em -10.00259em rgba(242, 140, 13, 0.45), -3.95033em -10.85345em rgba(242, 146, 13, 0.09), -2.00564em -11.37453em rgba(242, 151, 13, 0.09), 0em -11.55em rgba(242, 156, 13, 0.54), 2.00564em -11.37453em rgba(242, 162, 13, 0.18), 3.95033em -10.85345em rgba(242, 167, 13, 0.27), 5.775em -10.00259em rgba(242, 172, 13, 0.27), 7.4242em -8.84781em rgba(242, 177, 13, 0.54), 8.84781em -7.4242em rgba(242, 183, 13, 0.45), 10.00259em -5.775em rgba(242, 188, 13, 0.45), 10.85345em -3.95033em rgba(242, 193, 13, 0.54), 11.37453em -2.00564em rgba(242, 199, 13, 0.45);
    }

    50% {
      box-shadow: 11.55em 0em rgba(242, 13, 13, 0.09), 11.37453em 2.00564em rgba(242, 18, 13, 0.09), 10.85345em 3.95033em rgba(242, 23, 13, 0.27), 10.00259em 5.775em rgba(242, 29, 13, 0.36), 8.84781em 7.4242em rgba(242, 34, 13, 0.18), 7.4242em 8.84781em rgba(242, 39, 13, 0.45), 5.775em 10.00259em rgba(242, 45, 13, 0.27), 3.95033em 10.85345em rgba(242, 50, 13, 0.54), 2.00564em 11.37453em rgba(242, 55, 13, 0.27), 0em 11.55em rgba(242, 61, 13, 0.36), -2.00564em 11.37453em rgba(242, 66, 13, 0.09), -3.95033em 10.85345em rgba(242, 71, 13, 0.27), -5.775em 10.00259em rgba(242, 77, 13, 0.45), -7.4242em 8.84781em rgba(242, 82, 13, 0.27), -8.84781em 7.4242em rgba(242, 87, 13, 0.45), -10.00259em 5.775em rgba(242, 92, 13, 0.27), -10.85345em 3.95033em rgba(242, 98, 13, 0.63), -11.37453em 2.00564em rgba(242, 103, 13, 0.54), -11.55em 0em rgba(242, 108, 13, 0.63), -11.37453em -2.00564em rgba(242, 114, 13, 0.54), -10.85345em -3.95033em rgba(242, 119, 13, 0.45), -10.00259em -5.775em rgba(242, 124, 13, 0.09), -8.84781em -7.4242em rgba(242, 130, 13, 0.09), -7.4242em -8.84781em rgba(242, 135, 13, 0.27), -5.775em -10.00259em rgba(242, 140, 13, 0.63), -3.95033em -10.85345em rgba(242, 146, 13, 0.54), -2.00564em -11.37453em rgba(242, 151, 13, 0.63), 0em -11.55em rgba(242, 156, 13, 0.45), 2.00564em -11.37453em rgba(242, 162, 13, 0.45), 3.95033em -10.85345em rgba(242, 167, 13, 0.45), 5.775em -10.00259em rgba(242, 172, 13, 0.54), 7.4242em -8.84781em rgba(242, 177, 13, 0.09), 8.84781em -7.4242em rgba(242, 183, 13, 0.45), 10.00259em -5.775em rgba(242, 188, 13, 0.09), 10.85345em -3.95033em rgba(242, 193, 13, 0.27), 11.37453em -2.00564em rgba(242, 199, 13, 0.09);
    }

    100% {
      box-shadow: 11.55em 0em rgba(242, 13, 13, 0.54), 11.37453em 2.00564em rgba(242, 18, 13, 0.63), 10.85345em 3.95033em rgba(242, 23, 13, 0.36), 10.00259em 5.775em rgba(242, 29, 13, 0.18), 8.84781em 7.4242em rgba(242, 34, 13, 0.09), 7.4242em 8.84781em rgba(242, 39, 13, 0.45), 5.775em 10.00259em rgba(242, 45, 13, 0.45), 3.95033em 10.85345em rgba(242, 50, 13, 0.09), 2.00564em 11.37453em rgba(242, 55, 13, 0.36), 0em 11.55em rgba(242, 61, 13, 0.36), -2.00564em 11.37453em rgba(242, 66, 13, 0.09), -3.95033em 10.85345em rgba(242, 71, 13, 0.54), -5.775em 10.00259em rgba(242, 77, 13, 0.09), -7.4242em 8.84781em rgba(242, 82, 13, 0.09), -8.84781em 7.4242em rgba(242, 87, 13, 0.63), -10.00259em 5.775em rgba(242, 92, 13, 0.27), -10.85345em 3.95033em rgba(242, 98, 13, 0.18), -11.37453em 2.00564em rgba(242, 103, 13, 0.09), -11.55em 0em rgba(242, 108, 13, 0.18), -11.37453em -2.00564em rgba(242, 114, 13, 0.18), -10.85345em -3.95033em rgba(242, 119, 13, 0.54), -10.00259em -5.775em rgba(242, 124, 13, 0.45), -8.84781em -7.4242em rgba(242, 130, 13, 0.45), -7.4242em -8.84781em rgba(242, 135, 13, 0.18), -5.775em -10.00259em rgba(242, 140, 13, 0.45), -3.95033em -10.85345em rgba(242, 146, 13, 0.09), -2.00564em -11.37453em rgba(242, 151, 13, 0.09), 0em -11.55em rgba(242, 156, 13, 0.54), 2.00564em -11.37453em rgba(242, 162, 13, 0.18), 3.95033em -10.85345em rgba(242, 167, 13, 0.27), 5.775em -10.00259em rgba(242, 172, 13, 0.27), 7.4242em -8.84781em rgba(242, 177, 13, 0.54), 8.84781em -7.4242em rgba(242, 183, 13, 0.45), 10.00259em -5.775em rgba(242, 188, 13, 0.45), 10.85345em -3.95033em rgba(242, 193, 13, 0.54), 11.37453em -2.00564em rgba(242, 199, 13, 0.45);
    }
  }
  #paper {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -100;
    display: block;
    height: 100%;
    width: 100%;
    border-radius: 100%;
    margin: 0;
    -webkit-animation: pap 15s linear infinite;
    -moz-animation: pap 15s linear infinite;
    -ms-animation: pap 15s linear infinite;
    -o-animation: pap 15s linear infinite;
    animation: pap 15s linear infinite;
  }

  @-moz-keyframes pap {
    0% {
      opacity: 1;
    }
    2% {
      opacity: 0;
    }
    76% {
      opacity: 0;
    }
    77% {
      transform: scale(3.3);
    }
    85% {
      transform: scale(5);
    }
    98% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 1;
    }
  }
  @-webkit-keyframes pap {
    0% {
      opacity: 1;
    }
    2% {
      opacity: 0;
    }
    76% {
      opacity: 0;
    }
    77% {
      transform: scale(3.3);
    }
    85% {
      transform: scale(5);
    }
    98% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
    }
  }



`

const Events = ({ classes, ready, events, error }) => (
  <div className={classes.container}>
    <h3 className={classes.title}>
      <Icon className={classes.titleIcon} symbol={titleIcon} />
      Results{ ready ? `: ${events.length} events found` : ''}
    </h3>
    {!ready && error === undefined && <LoadingAnimation>Loading...</LoadingAnimation>}
    {!ready && error !== undefined && <ErrorBackground>Oh No! An Error Has Occured</ErrorBackground> }
    {ready && (
      <div className={classes.tilesWrapper}>
        <div className={classes.tiles}>
          {events.map(event => <Event key={event.id} className={classes.tile} content={event} />)}
        </div>
      </div>
    )}
  </div>
)

const mapStateToProps = (state) => ({
  ready: isEventsReady(state),
  events: getEvents(state),
  error: state.events.error
})

export default compose(
  connect(mapStateToProps),
  injectSheet({
    title: {
      paddingLeft: 20,
      position: 'relative'
    },
    titleIcon: {
      position: 'absolute',
      left: 0,
      top: 5
    },
    tilesWrapper: {
      margin: [0, 'auto'],
      maxWidth: theme.maxTileWidth,
      '@media (min-width: 768px)': {
        maxWidth: theme.maxTileWidth * 2 + theme.gutter
      },
      '@media (min-width: 1200px)': {
        maxWidth: theme.maxTileWidth * 3 + theme.gutter * 2
      }
    },
    tiles: {
      '@media (min-width: 768px)': {
        marginLeft: -theme.gutter / 2,
        marginRight: -theme.gutter / 2,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
      }
    },

    tile: {
      margin: [0, 'auto', theme.gutter],
      maxWidth: theme.maxTileWidth,
      '@media (min-width: 768px)': {
        marginLeft: theme.gutter / 2,
        marginRight: theme.gutter / 2,
        width: `calc(50% - ${theme.gutter}px)`
      },
      '@media (min-width: 1200px)': {
        width: `calc(${100 / 3}% - ${theme.gutter}px)`
      }
    }
  })
)(Events)
