import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { actorsActions } from 'store/actors.slice';
import {
  Col,
  Row,
  Spin,
} from 'antd';
import { Actor } from 'api/actors';
import { ActorCard } from 'containers/Actors/actorCard';
import { MovieModal } from 'containers/Movies/movieModal';

export const Actors = () => {
  const [activeActor, setActiveActor] = useState<string>('');
  const [modal, setModal] = useState<boolean>(false);
  const { actors } = useSelector((state: RootState) => state.actors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actorsActions.getAll());
  }, [dispatch]);

  const handleModal = (visible: boolean, actorId: string) => {
    setActiveActor(actorId);
    setModal(visible);
  };

  return (
    <div>
      <h1>Actors</h1>
      {actors.length === 0 && (
        <div>
          <Spin data-testid="loading" />
        </div>
      )}

      {actors.length > 0 && (
        <>
          <div>
            <h3>{`Listing ${actors.length} actors`}</h3>

            <Row gutter={[16, 24]}>
              {actors.map((actor: Actor) => (
                <Col key={actor.id} span={8}>
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => handleModal(true, actor.id)}
                    onKeyPress={() => handleModal(true, actor.id)}
                  >
                    <ActorCard actor={actor} />
                  </div>
                </Col>
              ))}
            </Row>
          </div>

          <MovieModal
            isVisible={modal}
            actorId={activeActor}
            handleModal={handleModal}
          />
        </>
      )}
    </div>
  );
};
