import { styled } from 'styled-components';

export const DogStyles = styled.div`
  .dog {
    --dog-body: #75a8cf;
    --dog-skin: #f5e9d3;
    --dog-skinShadow: #e5dac6;
    --dog-gray: #6e7071;
    --dog-grayShadow: #404040;
    --dog-tongue: #e48670;
    --dog-tongueShadow: #c2715e;
    --dog-white: #e5e8e7;
    --dog-whiteShadow: #d3d5d6;
    --dog-ear: #eaddca;
    --dog-earShadow: #c9bfae;

    &__head {
      display: flex;
      position: relative;
      width: 240px;
      margin: 0 auto;
      &::after {
        background-color: var(--dog-ear);
        content: '';
        position: absolute;
        left: -40px;
        width: 100px;
        height: 200px;
        border-radius: 40px;
        top: 15px;
        z-index: 0;
      }

      &::before {
        background-color: var(--dog-earShadow);
        content: '';
        position: absolute;
        right: -40px;
        width: 100px;
        height: 200px;
        border-radius: 40px;
        top: 15px;
        z-index: 0;
      }
      & > div {
        width: 120px;
        height: 280px;
        position: relative;
        z-index: 2;

        &:first-child {
          background-color: var(--dog-skin);
          border-top-left-radius: 60px;
          border-bottom-left-radius: 60px;

          .eye {
            background-color: var(--dog-gray);
            left: 50%;
          }

          .nose {
            position: absolute;
            top: 150px;
            left: calc(50% + 10px);
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 0 50px 50px 0;
            border-color: transparent var(--dog-gray) transparent transparent;
          }

          .dimple {
            width: 9px;
            height: 9px;
            background-color: var(--dog-gray);
            position: absolute;
            border-radius: 100%;
            z-index: 1;
            &:nth-child(2) {
              bottom: 60px;
              left: 50%;
            }

            &:nth-child(3) {
              bottom: 45px;
              left: calc(50% - 15px);
            }

            &:nth-child(4) {
              bottom: 35px;
              left: 50%;
            }

            &:nth-child(5) {
              bottom: 45px;
              left: calc(50% + 15px);
            }
          }
        }

        &:nth-child(2) {
          background-color: var(--dog-skinShadow);
          border-top-right-radius: 60px;
          border-bottom-right-radius: 60px;

          .eye {
            background-color: var(--dog-grayShadow);
            right: 50%;
          }
          .dimple {
            width: 9px;
            height: 9px;
            background-color: var(--dog-grayShadow);
            position: absolute;
            border-radius: 100%;
            z-index: 1;
            &:nth-child(2) {
              bottom: 60px;
              right: 50%;
            }

            &:nth-child(3) {
              bottom: 45px;
              right: calc(50% - 15px);
            }

            &:nth-child(4) {
              bottom: 35px;
              right: 50%;
            }

            &:nth-child(5) {
              bottom: 45px;
              right: calc(50% + 15px);
            }
          }
        }

        .eye {
          border-radius: 100%;
          height: 30px;
          width: 30px;
          position: absolute;
          top: 80px;
        }

        .nose {
          position: absolute;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 50px 50px 0 0;
          top: 150px;
          border-color: var(--dog-grayShadow) transparent transparent
            transparent;
        }
      }
    }

    div.dog__collar {
      position: absolute;
      width: 100%;
      & > div {
        &:first-child {
          background-color: var(--dog-gray);
          width: 20px;
          height: 20px;
          position: absolute;
          bottom: -20px;
          left: calc(50% - 30px - 20px);

          &::after {
            content: '';
            background-color: var(--dog-white);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 10px;
            height: 10px;
            border-radius: 100%;
          }
        }

        &:last-child {
          background-color: var(--dog-grayShadow);
          width: 20px;
          height: 20px;
          position: absolute;
          bottom: -20px;
          right: calc(50% - 30px - 20px);

          &::after {
            content: '';
            background-color: var(--dog-white);
            position: absolute;
            top: 50%;
            right: 1px;
            transform: translate(-50%, -50%);
            width: 10px;
            height: 10px;
            border-radius: 100%;
          }
        }
      }
    }

    div.dog__tongue {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 100px;
      background-color: var(--dog-tongue);
      bottom: -40px;
      border-bottom-left-radius: 50px;
      border-bottom-right-radius: 50px;
      overflow: hidden;

      &::after {
        content: '';
        position: absolute;
        top: -30px;
        background-color: var(--dog-skin);
        left: -20px;
        width: 50px;
        height: 50px;
        border-radius: 100%;
        z-index: -1;
      }

      &::before {
        content: '';
        position: absolute;
        top: -30px;
        background-color: var(--dog-skinShadow);
        right: -20px;
        width: 50px;
        height: 50px;
        border-radius: 100%;
        z-index: -1;
      }

      .shadow {
        position: absolute;
        width: 50%;
        height: 100px;
        right: 0;
        background-color: var(--dog-tongueShadow);
        border-bottom-right-radius: 30px;
        z-index: -2;
      }
    }
  }
`;
