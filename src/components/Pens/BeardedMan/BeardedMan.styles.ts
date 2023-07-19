import { styled } from 'styled-components';

export const BeardedManContainer = styled.div`
  --beardedMan-red: #b82925;
  --beardedMan-redLight: #e64332;
  --beardedMan-skin: #f6c09c;
  --beardedMan-skinShadow: #f4a68c;
  --beardedMan-beard: #072539;
  --beardedMan-beardShadow: #000000;
  --beardedMan-hairShadow: #164458;
  position: relative;
  margin-top: 40px;

  .man {
    width: 300px;
    margin: 0px auto 0;
  }

  .face {
    &__ears {
      position: absolute;
      width: 100%;
      top: 40%;
      margin: 0 auto;
      left: 0;
      right: 0;
      transform: translateY(-50%);
    }
    &__ear {
      background-color: var(--beardedMan-skin);
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 12px;
      height: 12px;
      &:first-child {
        left: calc(50% - 110px / 2 - 12px);
        border-top-left-radius: 100%;
        border-bottom-left-radius: 100%;
      }

      &:last-child {
        right: calc(50% - 110px / 2 - 12px);
        border-top-right-radius: 100%;
        border-bottom-right-radius: 100%;
      }
    }
  }

  .neck {
    &__top {
      background-color: var(--beardedMan-redLight);
      width: 150px;
      height: 20px;
      margin: 0 auto;
    }

    &__bottom {
      background-color: var(--beardedMan-red);
      width: 130px;
      height: 20px;
      margin: 0 auto;
    }
  }

  .face {
    background-color: var(--beardedMan-skinShadow);
    height: 150px;
    width: 110px;
    margin: 0 auto;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
    position: relative;
    overflow: hidden;

    &::after {
      position: absolute;
      background-color: var(--beardedMan-skin);
      display: block;
      content: '';
      width: 110%;
      height: 140px;
      top: 0px;
      left: -4px;
      border-bottom-left-radius: 100%;
      border-bottom-right-radius: 100%;
      border-top-left-radius: 100%;
      border-top-right-radius: 100%;
    }

    &::before {
      position: absolute;
      background-color: var(--beardedMan-skin);
      width: 20px;
      height: 20px;
      border-radius: 100%;
      content: '';
      top: -10px;
      left: 0;
      right: 0;
      margin: 0 auto;
      top: 50px;
      z-index: 99;
    }

    &__beard {
      background-color: var(--beardedMan-beardShadow);
      width: 80px;
      height: 80px;
      position: absolute;
      bottom: 10px;
      margin: 0 auto;
      left: 0;
      right: 0;
      border-radius: 50%;
      z-index: 2;
      overflow: hidden;

      &::after {
        content: '';
        position: absolute;
        background-color: var(--beardedMan-beard);
        height: 80px;
        width: 100%;
        border-radius: 50%;
        top: -30%;
        display: block;
      }
    }

    &__mouth {
      background-color: white;
      width: 20px;
      height: 12px;
      position: absolute;
      z-index: 3;
      left: 50%;
      top: 25px;
      transform: translateX(-50%);
      border-bottom-left-radius: 100%;
      border-bottom-right-radius: 100%;
    }

    &__eye {
      border-radius: 100%;
      background-color: var(--beardedMan-beard);
      width: 10px;
      height: 10px;
      position: absolute;
      left: 35px;
      top: 40px;
      z-index: 4;

      &:nth-child(2) {
        right: 35px;
        left: auto;
      }
    }

    &__hair {
      position: absolute;
      width: 100px;
      height: 60px;
      z-index: 9;
      right: -50px;
      top: -30px;
      margin: 0 auto;
      left: 0;
    }

    &__hair_shadow {
      width: 70px;
      height: 70px;
      border-radius: 100px;
      position: absolute;
      left: calc(50% - 60px);
      top: -20px;
      z-index: -9;
      background-color: var(--beardedMan-beardShadow);
    }

    &__hair_component {
      &:first-child {
        border-radius: 100%;
        height: 60px;
        width: 60px;
        background-color: var(--beardedMan-beard);
        z-index: 9;

        &::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 25px;
          background-color: var(--beardedMan-hairShadow);
          width: 25px;
          height: 10px;
          z-index: 1;
          border-radius: 100px;
        }

        &::before {
          content: '';
          position: absolute;
          top: 65%;
          left: 55px;
          background-color: var(--beardedMan-hairShadow);
          width: 20px;
          height: 7px;
          z-index: 1;
          border-radius: 100px;
        }
      }

      &:nth-child(2) {
        width: 100px;
        background-color: var(--beardedMan-beard);
        height: 35px;
        position: absolute;
        bottom: 0;
        border-bottom-left-radius: 100px;
        border-bottom-right-radius: 100px;
      }

      &:nth-child(3) {
        width: 60px;
        background-color: var(--beardedMan-beard);
        height: 25px;
        position: absolute;
        bottom: 20px;
        right: 20px;
        border-bottom-left-radius: 100px;
        border-bottom-right-radius: 100px;
      }
    }
  }
`;
