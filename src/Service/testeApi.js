
function teste(userState) {
  let dado = [];
  let tamanhoApi = userState?.resource?.items?.length || 0;
  for (let i = 0; i < tamanhoApi; i++) {
    if (userState.resource.items[i].metadata && userState.resource.items[i].metadata['#stateName']) {
      dado.push({
        ultimaBloco: userState.resource.items[i].metadata['#stateName'],
        Data: userState.resource.items[i].date
      });
    }
  }
  return dado;
}






let userState = {
  "type": "application/vnd.lime.collection+json",
  "resource": {
    "total": 100,
    "itemType": "application/vnd.iris.thread-message+json",
    "items": [
      {
        "id": "8ac424c6-58b2-45a9-a98d-8c4807e3336b",
        "direction": "sent",
        "type": "text/plain",
        "content": "Prezado cliente, no momento estamos fora do horário de atendimento regular, que ocorre de segunda a sexta-feira, das 08h às 17h. Entendemos que sua necessidade é importante, e para garantir o melhor suporte possível, sugerimos que entre em contato com a nossa central de atendimento através dos números abaixo:\n 4090-2210\n(Capital e região metropolitana)\n\n0800 800 2210\n(Para demais localidades)",
        "date": "2024-05-20T10:51:33.044Z",
        "status": "received",
        "metadata": {
          "#stateName": "Finaliza cliente fora de horario",
          "#stateId": "8e6a8b78-d94f-48cb-9050-a5d56f70d896",
          "#messageId": "context:0b2e0b0d-0219-4459-b3bf-d55ed48da2e6",
          "#previousStateId": "742cebea-04e9-4235-985e-aae7c8000446",
          "#previousStateName": "Valida Horario de atendimento",
          "traceparent": "00-5064ba4b8ceb5d29953caddaa76b1803-3f79997b6c28fc87-01",
          "#uniqueId": "3c1065aa-5765-4a44-ac9c-02f64b07c4c5",
          "#date_processed": "1716202293038",
          "date_created": "1716202293030",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethraatendimentohumano@msging.net/msging-application-builder-hosting-start-wxlzz",
          "#tunnel.originalTo": "8ec3f015-c3ff-43e7-b8cb-88210ea79978@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-vm57z;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "3c1065aa-5765-4a44-ac9c-02f64b07c4c5",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-vm57z",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0082886"
        }
      },
      {
        "id": "90d378c7-5f21-4cc0-8b71-801cc538b25f",
        "direction": "sent",
        "type": "text/plain",
        "content": "Aguarde um momento enquanto te transfiro para um de nossos especialistas...",
        "date": "2024-05-20T10:51:32.638Z",
        "status": "received",
        "metadata": {
          "#stateName": "1.2 - [MSG] Mensagem de transbordo atendente",
          "#stateId": "d2438ccf-befe-4c3b-ba66-5dd02fd56229",
          "#messageId": "context:39579b28-93b4-47cf-892b-f2cf51b97614",
          "#previousStateId": "136040a8-586e-4c4d-8490-5f3d1b62a5e8",
          "#previousStateName": "1.0 - [MSG] Contador inatividade",
          "traceparent": "00-5064ba4b8ceb5d29953caddaa76b1803-99f087b6a2b48d70-01",
          "#uniqueId": "4cd8c8f3-1830-4df0-9be7-6414a1465e8a",
          "#date_processed": "1716202292634",
          "date_created": "1716202292626",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethraexcecao@msging.net/msging-application-builder-hosting-start-wxlzz",
          "#tunnel.originalTo": "2d83dd85-6336-4f13-8f90-ed7918ac1619@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-vm57z;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "4cd8c8f3-1830-4df0-9be7-6414a1465e8a",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-vm57z",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0076554"
        }
      },
      {
        "id": "0e8b1aec-b51b-4c01-99a2-054e3867ab18",
        "direction": "sent",
        "type": "text/plain",
        "content": "Notamos que você ficou ausente por um tempo. Para continuarmos com esse atendimento responda por favor a mensagem abaixo:",
        "date": "2024-05-20T10:46:09.006Z",
        "status": "received",
        "metadata": {
          "#stateName": "1.1 - [MSG] Mensagem de Inatividade contagem",
          "#stateId": "0f58d656-4bc7-46c8-bd05-dd2f07b6e610",
          "#messageId": "context:5c1fa055-2f51-47be-b84d-9511b42e6ba2",
          "#previousStateId": "136040a8-586e-4c4d-8490-5f3d1b62a5e8",
          "#previousStateName": "1.0 - [MSG] Contador inatividade",
          "traceparent": "00-5064ba4b8ceb5d29953caddaa76b1803-82ba178d185c6260-01",
          "#uniqueId": "106a2265-7b3f-48fc-8ed0-c86e63e0888e",
          "#date_processed": "1716201969002",
          "date_created": "1716201968993",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethraexcecao@msging.net/msging-application-builder-hosting-start-nb72z",
          "#tunnel.originalTo": "2d83dd85-6336-4f13-8f90-ed7918ac1619@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-ds68g;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "106a2265-7b3f-48fc-8ed0-c86e63e0888e",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-ds68g",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0079520"
        }
      },
      {
        "id": "9fcc361c-122f-4a89-b829-07bf8eb9cb3a",
        "direction": "sent",
        "type": "text/plain",
        "content": "Qual é o seu endereço de *e-mail*?",
        "date": "2024-05-20T10:40:47.388Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "8.2- Pedir Email",
          "#stateId": "05accb02-41cb-4cf3-ba9e-9507c9c42ed9",
          "#messageId": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMDg3MjE2MzgzRUE0ODEyRkVCOQA=",
          "#previousStateId": "964576af-886f-44bc-92ef-af4fb8762ce7",
          "#previousStateName": "8.1- Resposta CPF para atendimento",
          "traceparent": "00-5064ba4b8ceb5d29953caddaa76b1803-0a9571b2845a1864-01",
          "#uniqueId": "9cdec48b-60bf-439b-990b-c14670c8c776",
          "#date_processed": "1716201647383",
          "date_created": "1716201647375",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethramenu@msging.net/msging-application-builder-hosting-start-ngzt4",
          "#tunnel.originalTo": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-cpvx4;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "9cdec48b-60bf-439b-990b-c14670c8c776",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-cpvx4",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0074025"
        }
      },
      {
        "id": "a03a411e-e500-449d-8faf-f404a78eaaf0",
        "direction": "sent",
        "type": "text/plain",
        "content": "Por favor, forneça o *CPF da pessoa que deseja atendimento*.",
        "date": "2024-05-20T10:40:35.973Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "8.0- CPF Ativo Pedir CPF Atendimento",
          "#stateId": "66119122-fb27-4f6d-8649-899e929d417a",
          "#messageId": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMEUzRjBDQzI5MjUyQkFBNDFDNQA=",
          "#previousStateId": "e9658018-7c6e-4224-9af2-5484cd52f1c9",
          "#previousStateName": "[SCRIPT] Resposta CPF/CNPJ",
          "traceparent": "00-f1c1787c4ec281ecd0f145582476974d-6cbea02d4b29311a-01",
          "#uniqueId": "c4a6c0ba-979f-4582-96b4-b75142be9358",
          "#date_processed": "1716201635968",
          "date_created": "1716201635958",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethramenu@msging.net/msging-application-builder-hosting-start-6z9qx",
          "#tunnel.originalTo": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-j98r5;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "c4a6c0ba-979f-4582-96b4-b75142be9358",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-j98r5",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0072191"
        }
      },
      {
        "id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMDg3MjE2MzgzRUE0ODEyRkVCOQA=",
        "direction": "received",
        "type": "text/plain",
        "content": "teste",
        "date": "2024-05-20T10:40:28.760Z",
        "status": "dispatched",
        "metadata": {
          "#wa.timestamp": "1716201627",
          "traceparent": "00-5064ba4b8ceb5d29953caddaa76b1803-9461be725ed05771-01",
          "$internalId": "b86f6a98-3276-494b-a053-4d5063422910",
          "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-bs9d7",
          "#uniqueId": "b86f6a98-3276-494b-a053-4d5063422910",
          "#date_processed": "1716201628752",
          "date_created": "1716201628750",
          "$elapsedTimeToStorage": "00:00:00.0109524"
        }
      },
      {
        "id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMEUzRjBDQzI5MjUyQkFBNDFDNQA=",
        "direction": "received",
        "type": "text/plain",
        "content": "opa",
        "date": "2024-05-20T10:40:15.423Z",
        "status": "dispatched",
        "metadata": {
          "#wa.timestamp": "1716201614",
          "traceparent": "00-f1c1787c4ec281ecd0f145582476974d-4077ff644b36271c-01",
          "$internalId": "185df30d-ea20-4970-b27d-7ec5d7c3cca1",
          "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-sh7c6",
          "#uniqueId": "185df30d-ea20-4970-b27d-7ec5d7c3cca1",
          "#date_processed": "1716201615415",
          "date_created": "1716201615413",
          "$elapsedTimeToStorage": "00:00:00.0113911"
        }
      },
      {
        "id": "02a399ea-30a8-4e89-afd4-aa37834cde1c",
        "direction": "sent",
        "type": "text/plain",
        "content": "Qual o *CPF do titular* do plano de saúde?",
        "date": "2024-05-17T22:33:20.061Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "[MSG]perguntando o CPF / CNPJ",
          "#stateId": "7c2cb5dc-74cd-406e-8c14-45375f96e0ee",
          "#messageId": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgUM0EwNzVBOUVCODEyRUI4Q0RBQzAA",
          "#previousStateId": "1d7d0068-b064-4f92-ab25-d3d30d1b2dc5",
          "#previousStateName": "16.2- Resposta Matricula",
          "traceparent": "00-17b9801f6f4a342579afd9d451d79ed6-06fd6e5b77648914-01",
          "#uniqueId": "dfe3ac96-d175-4fb2-9f0a-0b76ceba8475",
          "#date_processed": "1715985200051",
          "date_created": "1715985200043",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethramenu@msging.net/msging-application-builder-hosting-start-g5wxg",
          "#tunnel.originalTo": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-6hstd;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "dfe3ac96-d175-4fb2-9f0a-0b76ceba8475",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-6hstd",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0124424"
        }
      },
      {
        "id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgUM0EwNzVBOUVCODEyRUI4Q0RBQzAA",
        "direction": "received",
        "type": "text/plain",
        "content": "5094",
        "date": "2024-05-17T22:33:18.669Z",
        "status": "dispatched",
        "metadata": {
          "#wa.timestamp": "1715985197",
          "traceparent": "00-17b9801f6f4a342579afd9d451d79ed6-6e9b74c5f4006773-01",
          "$internalId": "0cbc9748-f277-457a-8e93-e9e80f4768d1",
          "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-g7w48",
          "#uniqueId": "0cbc9748-f277-457a-8e93-e9e80f4768d1",
          "#date_processed": "1715985198662",
          "date_created": "1715985198660",
          "$elapsedTimeToStorage": "00:00:00.0094296"
        }
      },
      {
        "id": "bd99128c-07f9-4126-bf02-138b355cdb2d",
        "direction": "sent",
        "type": "text/plain",
        "content": "Qual o número da matrícula do funcionário?",
        "date": "2024-05-17T22:33:09.816Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "16.1- Pedir Matricula",
          "#stateId": "435acfba-48ae-4fbf-a2ff-4a83e3dd9334",
          "#messageId": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgUM0EyM0Y1RkY3N0Y2REZBRkM1REEA",
          "#previousStateId": "d568bf38-5cef-421d-b3d0-3798f9b599d1",
          "#previousStateName": "3.1- Resposta Plano de Saude ou RH",
          "traceparent": "00-14558e645f40d91f4257fc3e9cc44d8e-454044179e901e39-01",
          "#uniqueId": "07e03a7d-e730-46a5-9e12-0f1d454afcca",
          "#date_processed": "1715985189811",
          "date_created": "1715985189803",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethramenu@msging.net/msging-application-builder-hosting-start-gjmx7",
          "#tunnel.originalTo": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-4kh9c;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "07e03a7d-e730-46a5-9e12-0f1d454afcca",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-4kh9c",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0078601"
        }
      },
      {
        "id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgUM0EyM0Y1RkY3N0Y2REZBRkM1REEA",
        "direction": "received",
        "type": "application/vnd.lime.reply+json",
        "content": {
          "replied": {
            "type": "text/plain",
            "value": "Plano de Saúde"
          },
          "inReplyTo": {
            "id": "4322620c-db87-419e-97ea-123fcd297648",
            "type": "application/vnd.lime.select+json",
            "value": {
              "scope": "immediate",
              "text": "Por favor, escolha a opção desejada:",
              "options": [
                {
                  "text": "Plano de Saúde"
                },
                {
                  "text": "Atendimento RH"
                }
              ]
            },
            "direction": "sent"
          }
        },
        "date": "2024-05-17T22:33:08.589Z",
        "status": "dispatched",
        "metadata": {
          "#wa.timestamp": "1715985187",
          "#wa.context.from": "553432937100",
          "#wa.context.id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAERgSMUI2MjUzOEJENTBFQTVGMDdGAA==",
          "#wa.context.group_id": null,
          "#wa.forwarded": null,
          "#wa.frequently_forwarded": null,
          "#wa.interactive.button.id": "PlanodeSaúde",
          "#wa.message.id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAERgSMUI2MjUzOEJENTBFQTVGMDdGAA==",
          "traceparent": "00-14558e645f40d91f4257fc3e9cc44d8e-3fb788f9f9d7d55b-01",
          "#inReplyToId": "wamid.HBgMNTUzNDk3ODAxODI5FQIAERgSMUI2MjUzOEJENTBFQTVGMDdGAA==",
          "#messageReferenceInternalID": "32e90efa-cb02-482d-85c2-e88dcc40e9df",
          "$internalId": "661a6435-2e55-4a77-9183-8075c9f45799",
          "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-fz6hv",
          "#uniqueId": "661a6435-2e55-4a77-9183-8075c9f45799",
          "#date_processed": "1715985188582",
          "date_created": "1715985188579",
          "$elapsedTimeToStorage": "00:00:00.0115970"
        }
      },
      {
        "id": "4322620c-db87-419e-97ea-123fcd297648",
        "direction": "sent",
        "type": "application/vnd.lime.select+json",
        "content": {
          "scope": "immediate",
          "text": "Por favor, escolha a opção desejada:",
          "options": [
            {
              "text": "Plano de Saúde"
            },
            {
              "text": "Atendimento RH"
            }
          ]
        },
        "date": "2024-05-17T22:30:29.485Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "3.0- Menu Plano Saude ou RH",
          "#stateId": "cf66bef4-4952-4850-b896-bba1154e11af",
          "#messageId": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgUM0ExNUU4NjJDNkM0MUMxMjAyRTgA",
          "#previousStateId": "64a46c6a-189a-4d3a-a681-7e96304b4c6c",
          "#previousStateName": "2.0- Boas Vindas",
          "traceparent": "00-d3461dcbd431bcebd7b4efaed9209541-c1b888721b3402f8-01",
          "#uniqueId": "32e90efa-cb02-482d-85c2-e88dcc40e9df",
          "#date_processed": "1715985029480",
          "date_created": "1715985029469",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethramenu@msging.net/msging-application-builder-hosting-start-spbxx",
          "#tunnel.originalTo": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-nqvxp;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "32e90efa-cb02-482d-85c2-e88dcc40e9df",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-nqvxp",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0078320"
        }
      },
      {
        "id": "3be2736c-a9bb-4ed6-9b59-69cfee6d7928",
        "direction": "sent",
        "type": "text/plain",
        "content": "Ao continuar com este atendimento, você expressa concordância com a nossa política de privacidade, disponível no link abaixo em nosso site:\nhttps://www.aethra.com.br/br/policy/",
        "date": "2024-05-17T22:30:28.460Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "2.0- Boas Vindas",
          "#stateId": "64a46c6a-189a-4d3a-a681-7e96304b4c6c",
          "#messageId": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgUM0ExNUU4NjJDNkM0MUMxMjAyRTgA",
          "#previousStateId": "53ad7529-3fea-4c00-b694-d4abc4e62e32",
          "#previousStateName": "1.0- Checar redirecionamento para bloco específico",
          "traceparent": "00-d3461dcbd431bcebd7b4efaed9209541-9cb4a4f8f68279ae-01",
          "#uniqueId": "b95be7c5-24b6-4fea-a87d-d817e25b22ec",
          "#date_processed": "1715985028454",
          "date_created": "1715985028441",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethramenu@msging.net/msging-application-builder-hosting-start-spbxx",
          "#tunnel.originalTo": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-nqvxp;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "b95be7c5-24b6-4fea-a87d-d817e25b22ec",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-nqvxp",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0081693"
        }
      },
      {
        "id": "78d9a263-aa82-4351-bfc2-1308c64dbffc",
        "direction": "sent",
        "type": "text/plain",
        "content": "Seja bem-vindo(a) ao atendimento da *Aethra*",
        "date": "2024-05-17T22:30:27.446Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "2.0- Boas Vindas",
          "#stateId": "64a46c6a-189a-4d3a-a681-7e96304b4c6c",
          "#messageId": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgUM0ExNUU4NjJDNkM0MUMxMjAyRTgA",
          "#previousStateId": "53ad7529-3fea-4c00-b694-d4abc4e62e32",
          "#previousStateName": "1.0- Checar redirecionamento para bloco específico",
          "traceparent": "00-d3461dcbd431bcebd7b4efaed9209541-8e245f7a5ae0e131-01",
          "#uniqueId": "9a78ca91-65e0-4dd6-a1a9-160bdb18ce14",
          "#date_processed": "1715985027439",
          "date_created": "1715985027431",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethramenu@msging.net/msging-application-builder-hosting-start-spbxx",
          "#tunnel.originalTo": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-nqvxp;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "9a78ca91-65e0-4dd6-a1a9-160bdb18ce14",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-nqvxp",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0098221"
        }
      },
      {
        "id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgUM0ExNUU4NjJDNkM0MUMxMjAyRTgA",
        "direction": "received",
        "type": "text/plain",
        "content": "Olha",
        "date": "2024-05-17T22:30:25.667Z",
        "status": "dispatched",
        "metadata": {
          "#wa.timestamp": "1715985025",
          "traceparent": "00-d3461dcbd431bcebd7b4efaed9209541-738d77f69a64c8b4-01",
          "$internalId": "596cecc6-1a78-4fdb-9016-f488f8517bee",
          "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-snwmf",
          "#uniqueId": "596cecc6-1a78-4fdb-9016-f488f8517bee",
          "#date_processed": "1715985025662",
          "date_created": "1715985025660",
          "$elapsedTimeToStorage": "00:00:00.0083647"
        }
      },
      {
        "id": "3b901b09-b7af-489e-b642-fce3f23cdad3",
        "direction": "sent",
        "type": "text/plain",
        "content": "A *Aethra* agradece o seu contato, até breve.",
        "date": "2024-05-17T22:28:53.982Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "4.0 - Finalizar Cliente",
          "#stateId": "9a32e0a7-a95f-4d85-9398-bb83c2af8132",
          "#messageId": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgUM0FCRjMwN0JFRkUzNDJCRTQ3NkYA",
          "#previousStateId": "d44ce0ae-e119-49d5-a98f-386e84c18637",
          "#previousStateName": "[MSG + INPUT + SCRIPT] 3.0 - P2 - Nota Att",
          "traceparent": "00-d3eaf459e4a989b6dc7fa6d392ff4839-4536ed038214f69a-01",
          "#uniqueId": "985e8903-979e-47e2-b7a4-5b90993ae5cf",
          "#date_processed": "1715984933978",
          "date_created": "1715984933970",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethrapesquisa@msging.net/msging-application-builder-hosting-start-spbxx",
          "#tunnel.originalTo": "af599b08-08ef-4f25-9ac5-0d480d7f48a8@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-nqvxp;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "985e8903-979e-47e2-b7a4-5b90993ae5cf",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-nqvxp",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0066915"
        }
      },
      {
        "id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgUM0FCRjMwN0JFRkUzNDJCRTQ3NkYA",
        "direction": "received",
        "type": "text/plain",
        "content": "1",
        "date": "2024-05-17T22:28:52.846Z",
        "status": "dispatched",
        "metadata": {
          "#wa.timestamp": "1715984932",
          "traceparent": "00-d3eaf459e4a989b6dc7fa6d392ff4839-a72950ed10a28c6c-01",
          "$internalId": "70fdef79-84fd-43c4-89d1-fc5ec3d45465",
          "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-snwmf",
          "#uniqueId": "70fdef79-84fd-43c4-89d1-fc5ec3d45465",
          "#date_processed": "1715984932840",
          "date_created": "1715984932838",
          "$elapsedTimeToStorage": "00:00:00.0083859"
        }
      },
      {
        "id": "04addd9f-7a8f-47dd-8ea7-a49f24e0c36a",
        "direction": "sent",
        "type": "text/plain",
        "content": "Como você avalia o atendimento do nosso time?\n\nDigite uma nota 1 á 10.",
        "date": "2024-05-17T22:28:43.233Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "[MSG + INPUT + SCRIPT] 3.0 - P2 - Nota Att",
          "#stateId": "d44ce0ae-e119-49d5-a98f-386e84c18637",
          "#messageId": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgUM0FFQThBMzZDRTRDMzk3RTM2QjEA",
          "#previousStateId": "19a6e4f9-bffa-44d6-b0d4-6d4b9f473067",
          "#previousStateName": "[MSG+INPUT] 2.0 - P1 - Nota Bot",
          "traceparent": "00-1cde601e1ebac3d3e90c181c158adb4c-00944534238d9122-01",
          "#uniqueId": "e8872834-f0e1-43d8-b826-db0538c276f0",
          "#date_processed": "1715984923227",
          "date_created": "1715984923218",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethrapesquisa@msging.net/msging-application-builder-hosting-start-xfgkg",
          "#tunnel.originalTo": "af599b08-08ef-4f25-9ac5-0d480d7f48a8@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-zzxrd;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "e8872834-f0e1-43d8-b826-db0538c276f0",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-zzxrd",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0090684"
        }
      },
      {
        "id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgUM0FFQThBMzZDRTRDMzk3RTM2QjEA",
        "direction": "received",
        "type": "application/vnd.lime.reply+json",
        "content": {
          "replied": {
            "type": "text/plain",
            "value": "Sim"
          },
          "inReplyTo": {
            "id": "8e70bee3-7729-49b9-a062-8fc96576526e",
            "type": "application/vnd.lime.select+json",
            "value": {
              "scope": "immediate",
              "text": "Gostaria de avaliar nosso atendimento? ",
              "options": [
                {
                  "text": "Sim"
                },
                {
                  "text": "Não"
                }
              ]
            },
            "direction": "sent"
          }
        },
        "date": "2024-05-17T22:28:41.966Z",
        "status": "dispatched",
        "metadata": {
          "#wa.timestamp": "1715984921",
          "#wa.context.from": "553432937100",
          "#wa.context.id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAERgSNjhFQjg3NkRENEFGMEI1ODQyAA==",
          "#wa.context.group_id": null,
          "#wa.forwarded": null,
          "#wa.frequently_forwarded": null,
          "#wa.interactive.button.id": "Sim",
          "#wa.message.id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAERgSNjhFQjg3NkRENEFGMEI1ODQyAA==",
          "traceparent": "00-1cde601e1ebac3d3e90c181c158adb4c-b8ea01d4c404975b-01",
          "#inReplyToId": "wamid.HBgMNTUzNDk3ODAxODI5FQIAERgSNjhFQjg3NkRENEFGMEI1ODQyAA==",
          "#messageReferenceInternalID": "b81ed8c4-e705-4e73-a503-abce53739de6",
          "$internalId": "ffd6032b-b3ae-42c2-93a6-e8398e9298e6",
          "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-w2n57",
          "#uniqueId": "ffd6032b-b3ae-42c2-93a6-e8398e9298e6",
          "#date_processed": "1715984921959",
          "date_created": "1715984921957",
          "$elapsedTimeToStorage": "00:00:00.0104473"
        }
      },
      {
        "id": "8e70bee3-7729-49b9-a062-8fc96576526e",
        "direction": "sent",
        "type": "application/vnd.lime.select+json",
        "content": {
          "scope": "immediate",
          "text": "Gostaria de avaliar nosso atendimento? ",
          "options": [
            {
              "text": "Sim"
            },
            {
              "text": "Não"
            }
          ]
        },
        "date": "2024-05-17T22:28:37.462Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "[MSG+INPUT] 2.0 - P1 - Nota Bot",
          "#stateId": "19a6e4f9-bffa-44d6-b0d4-6d4b9f473067",
          "#messageId": "context:5ba1d99e-1b0c-4ff2-9145-2fe520711b50",
          "#previousStateId": "0406a3c0-539e-4a6a-8143-fa79c3fdc76a",
          "#previousStateName": "1.1 - Verificar Canal",
          "traceparent": "00-1c6cff9ec091d574535e03b9eea2cd94-03f70fc0db0e3c0a-01",
          "#uniqueId": "b81ed8c4-e705-4e73-a503-abce53739de6",
          "#date_processed": "1715984917457",
          "date_created": "1715984917449",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethrapesquisa@msging.net/msging-application-builder-hosting-start-sxdcm",
          "#tunnel.originalTo": "af599b08-08ef-4f25-9ac5-0d480d7f48a8@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-nz8nc;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "b81ed8c4-e705-4e73-a503-abce53739de6",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-nz8nc",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0075116"
        }
      },
      {
        "id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgUM0E2QUU1NTA5MUUwODlBNkVFN0YA",
        "direction": "received",
        "type": "text/plain",
        "content": "#sair",
        "date": "2024-05-17T22:28:35.528Z",
        "status": "dispatched",
        "metadata": {
          "#wa.timestamp": "1715984914",
          "traceparent": "00-1c6cff9ec091d574535e03b9eea2cd94-8249ce598e456ce5-01",
          "$internalId": "0f1097f9-c89d-40cf-86c7-d4ab19830f9b",
          "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-b7t6x",
          "#uniqueId": "0f1097f9-c89d-40cf-86c7-d4ab19830f9b",
          "#date_processed": "1715984915522",
          "date_created": "1715984915520",
          "$elapsedTimeToStorage": "00:00:00.0095298"
        }
      },
      {
        "id": "df77cf6a-f48a-44da-ac31-018f830fb357",
        "direction": "received",
        "type": "application/vnd.iris.ticket+json",
        "content": {
          "id": "df77cf6a-f48a-44da-ac31-018f830fb357",
          "sequentialId": 162,
          "ownerIdentity": "aethraatendimentohumano@msging.net",
          "customerIdentity": "8ec3f015-c3ff-43e7-b8cb-88210ea79978@tunnel.msging.net",
          "customerDomain": "wa.gw.msging.net",
          "provider": "Lime",
          "status": "Waiting",
          "storageDate": "2024-05-16T20:19:55.351Z",
          "externalId": "df77cf6a-f48a-44da-ac31-018f830fb357",
          "rating": 0,
          "team": "Default",
          "unreadMessages": 0,
          "closed": false,
          "customerInput": {
            "type": "text/plain",
            "value": "oi"
          },
          "priority": 0
        },
        "date": "2024-05-16T20:19:55.420Z"
      },
      {
        "id": "19ff5a43-57e0-4714-a13d-1f8e8b44c4ac",
        "direction": "sent",
        "type": "text/plain",
        "content": "Aguarde um momento enquanto te transfiro para um de nossos especialistas...",
        "date": "2024-05-16T20:19:54.551Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "1.2 - [MSG] Mensagem de transbordo atendente",
          "#stateId": "d2438ccf-befe-4c3b-ba66-5dd02fd56229",
          "#messageId": "context:e9ca3328-996c-4a91-b053-a301cf12de44",
          "#previousStateId": "136040a8-586e-4c4d-8490-5f3d1b62a5e8",
          "#previousStateName": "1.0 - [MSG] Contador inatividade",
          "traceparent": "00-556d17c4a323645612c4c41b31dfc383-5fc04ffe29163936-01",
          "#uniqueId": "ddff029e-a064-4edf-ab39-fb256ce092b2",
          "#date_processed": "1715890794545",
          "date_created": "1715890794536",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethraexcecao@msging.net/msging-application-builder-hosting-start-67r6z",
          "#tunnel.originalTo": "2d83dd85-6336-4f13-8f90-ed7918ac1619@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-vc6mm;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "ddff029e-a064-4edf-ab39-fb256ce092b2",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-vc6mm",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0081373"
        }
      },
      {
        "id": "9548549d-47ae-45bb-a644-f09861b08494",
        "direction": "sent",
        "type": "text/plain",
        "content": "Notamos que você ficou ausente por um tempo. Para continuarmos com esse atendimento responda por favor a mensagem abaixo:",
        "date": "2024-05-16T20:14:50.956Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "1.1 - [MSG] Mensagem de Inatividade contagem",
          "#stateId": "0f58d656-4bc7-46c8-bd05-dd2f07b6e610",
          "#messageId": "context:73714d65-1d87-4e54-b175-72f884ab5a8b",
          "#previousStateId": "136040a8-586e-4c4d-8490-5f3d1b62a5e8",
          "#previousStateName": "1.0 - [MSG] Contador inatividade",
          "traceparent": "00-556d17c4a323645612c4c41b31dfc383-614bbd8e53ecd8b8-01",
          "#uniqueId": "00ef8e30-e2bc-48bd-b556-9516a9825dda",
          "#date_processed": "1715890490951",
          "date_created": "1715890490941",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethraexcecao@msging.net/msging-application-builder-hosting-start-s9jqv",
          "#tunnel.originalTo": "2d83dd85-6336-4f13-8f90-ed7918ac1619@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-cm92l;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "00ef8e30-e2bc-48bd-b556-9516a9825dda",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-cm92l",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0092081"
        }
      },
      {
        "id": "15af775f-4f48-4b28-a67a-cab489d1e3e8",
        "direction": "sent",
        "type": "text/plain",
        "content": "Qual o número da matrícula do funcionário?",
        "date": "2024-05-16T20:09:49.814Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "16.1- Pedir Matricula",
          "#stateId": "435acfba-48ae-4fbf-a2ff-4a83e3dd9334",
          "#messageId": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMEMwMDhGOUY1MTI4QzYwQzI4QgA=",
          "#previousStateId": "d568bf38-5cef-421d-b3d0-3798f9b599d1",
          "#previousStateName": "3.1- Resposta Plano de Saude ou RH",
          "traceparent": "00-556d17c4a323645612c4c41b31dfc383-cc8f658d001799a3-01",
          "#uniqueId": "0a91ea5b-a5d0-432f-8d9b-58cb3925a4cf",
          "#date_processed": "1715890189809",
          "date_created": "1715890189795",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethramenu@msging.net/msging-application-builder-hosting-start-nfdkl",
          "#tunnel.originalTo": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-klhvb;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "0a91ea5b-a5d0-432f-8d9b-58cb3925a4cf",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-klhvb",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0097905"
        }
      },
      {
        "id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMEMwMDhGOUY1MTI4QzYwQzI4QgA=",
        "direction": "received",
        "type": "application/vnd.lime.reply+json",
        "content": {
          "replied": {
            "type": "text/plain",
            "value": "Plano de Saúde"
          },
          "inReplyTo": {
            "id": "652db0f3-cb9f-42dc-9f6e-882f0c07434c",
            "type": "application/vnd.lime.select+json",
            "value": {
              "scope": "immediate",
              "text": "Por favor, escolha a opção desejada:",
              "options": [
                {
                  "text": "Plano de Saúde"
                },
                {
                  "text": "Atendimento RH"
                }
              ]
            },
            "direction": "sent"
          }
        },
        "date": "2024-05-16T20:09:48.508Z",
        "status": "dispatched",
        "metadata": {
          "#wa.timestamp": "1715890187",
          "#wa.context.from": "553432937100",
          "#wa.context.id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAERgSQjEwNDY4NkFGRjBENURDRkMxAA==",
          "#wa.context.group_id": null,
          "#wa.forwarded": null,
          "#wa.frequently_forwarded": null,
          "#wa.interactive.button.id": "PlanodeSaúde",
          "#wa.message.id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAERgSQjEwNDY4NkFGRjBENURDRkMxAA==",
          "traceparent": "00-556d17c4a323645612c4c41b31dfc383-cb85f623cc618565-01",
          "#inReplyToId": "wamid.HBgMNTUzNDk3ODAxODI5FQIAERgSQjEwNDY4NkFGRjBENURDRkMxAA==",
          "#messageReferenceInternalID": "b6209261-5f0c-40b7-810c-dffabc05a48b",
          "$internalId": "45e0a428-805b-4994-9f2e-54547a4db609",
          "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-w2xjm",
          "#uniqueId": "45e0a428-805b-4994-9f2e-54547a4db609",
          "#date_processed": "1715890188500",
          "date_created": "1715890188498",
          "$elapsedTimeToStorage": "00:00:00.0116802"
        }
      },
      {
        "id": "0d9b5197-749f-4cfa-9fa7-d957e6d8c45d",
        "direction": "sent",
        "type": "text/plain",
        "content": "Não consegui compreender sua resposta. <b>Por gentileza, responda considerando a pergunta feita acima</b> 👆🏻",
        "date": "2024-05-16T20:09:42.995Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "8.0 - [MSG] Mensagem de Erro genérico",
          "#stateId": "83283c74-6399-46d5-b4b7-1c21847c5083",
          "#messageId": "context:cd182110-6871-4304-a660-95252eb59c9f",
          "#previousStateId": "84e24378-d4b1-486f-9cd9-e6fca5820451",
          "#previousStateName": "7.0 - [VARIABLE] Erro genérico",
          "traceparent": "00-13070beb1fe633b355051d1a3ed1db30-18c6fe531154e7b5-01",
          "#uniqueId": "69d2a5a5-8aaa-4d11-af72-5ca322638a18",
          "#date_processed": "1715890182988",
          "date_created": "1715890182978",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethraexcecao@msging.net/msging-application-builder-hosting-start-stsvg",
          "#tunnel.originalTo": "2d83dd85-6336-4f13-8f90-ed7918ac1619@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-2spzt;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "69d2a5a5-8aaa-4d11-af72-5ca322638a18",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-2spzt",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0095257"
        }
      },
      {
        "id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMEMyM0FCOEVGOTc4QTk5NzgyNgA=",
        "direction": "received",
        "type": "text/plain",
        "content": "b",
        "date": "2024-05-16T20:09:41.300Z",
        "status": "dispatched",
        "metadata": {
          "#wa.timestamp": "1715890179",
          "traceparent": "00-13070beb1fe633b355051d1a3ed1db30-8cef59383b9d36a9-01",
          "$internalId": "6b5ad16d-4e54-41ee-988f-2d11826324d4",
          "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-bl6sn",
          "#uniqueId": "6b5ad16d-4e54-41ee-988f-2d11826324d4",
          "#date_processed": "1715890181292",
          "date_created": "1715890181286",
          "$elapsedTimeToStorage": "00:00:00.0150291"
        }
      },
      {
        "id": "652db0f3-cb9f-42dc-9f6e-882f0c07434c",
        "direction": "sent",
        "type": "application/vnd.lime.select+json",
        "content": {
          "scope": "immediate",
          "text": "Por favor, escolha a opção desejada:",
          "options": [
            {
              "text": "Plano de Saúde"
            },
            {
              "text": "Atendimento RH"
            }
          ]
        },
        "date": "2024-05-16T20:09:36.470Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "3.0- Menu Plano Saude ou RH",
          "#stateId": "cf66bef4-4952-4850-b896-bba1154e11af",
          "#messageId": "context:e9095433-62e1-4839-9e2b-9978446e1092",
          "#previousStateId": "64a46c6a-189a-4d3a-a681-7e96304b4c6c",
          "#previousStateName": "2.0- Boas Vindas",
          "traceparent": "00-3e85b37d7d53417341dfdd6c2fd8125b-186aef1e79d2903e-01",
          "#uniqueId": "b6209261-5f0c-40b7-810c-dffabc05a48b",
          "#date_processed": "1715890176465",
          "date_created": "1715890176446",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethramenu@msging.net/msging-application-builder-hosting-start-xq5z5",
          "#tunnel.originalTo": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-7p2fp;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "b6209261-5f0c-40b7-810c-dffabc05a48b",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-7p2fp",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0091264"
        }
      },
      {
        "id": "02cc9975-71b3-4aad-ba4e-6483e179849c",
        "direction": "sent",
        "type": "text/plain",
        "content": "Ao continuar com este atendimento, você expressa concordância com a nossa política de privacidade, disponível no link abaixo em nosso site:\nhttps://www.aethra.com.br/br/policy/",
        "date": "2024-05-16T20:09:35.442Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "2.0- Boas Vindas",
          "#stateId": "64a46c6a-189a-4d3a-a681-7e96304b4c6c",
          "#messageId": "context:e9095433-62e1-4839-9e2b-9978446e1092",
          "#previousStateId": "53ad7529-3fea-4c00-b694-d4abc4e62e32",
          "#previousStateName": "1.0- Checar redirecionamento para bloco específico",
          "traceparent": "00-3e85b37d7d53417341dfdd6c2fd8125b-3146155ab4973573-01",
          "#uniqueId": "9118bb49-d21b-4740-9e33-c38c53c6027b",
          "#date_processed": "1715890175437",
          "date_created": "1715890175417",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethramenu@msging.net/msging-application-builder-hosting-start-xq5z5",
          "#tunnel.originalTo": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-7p2fp;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "9118bb49-d21b-4740-9e33-c38c53c6027b",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-7p2fp",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0092795"
        }
      },
      {
        "id": "23834d97-68d7-4f87-b888-9b886bbb5ad9",
        "direction": "sent",
        "type": "text/plain",
        "content": "Seja bem-vindo(a) ao atendimento da *Aethra*",
        "date": "2024-05-16T20:09:34.430Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "2.0- Boas Vindas",
          "#stateId": "64a46c6a-189a-4d3a-a681-7e96304b4c6c",
          "#messageId": "context:e9095433-62e1-4839-9e2b-9978446e1092",
          "#previousStateId": "53ad7529-3fea-4c00-b694-d4abc4e62e32",
          "#previousStateName": "1.0- Checar redirecionamento para bloco específico",
          "traceparent": "00-3e85b37d7d53417341dfdd6c2fd8125b-6a5d2ec73876d6cb-01",
          "#uniqueId": "02da978c-34ae-415b-9719-73d5cb59fabd",
          "#date_processed": "1715890174424",
          "date_created": "1715890174411",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethramenu@msging.net/msging-application-builder-hosting-start-xq5z5",
          "#tunnel.originalTo": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-7p2fp;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "02da978c-34ae-415b-9719-73d5cb59fabd",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-7p2fp",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0097484"
        }
      },
      {
        "id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMEIzQjMzNzFBRTg0OUNBMTY2NQA=",
        "direction": "received",
        "type": "text/plain",
        "content": "aethra",
        "date": "2024-05-16T20:09:32.466Z",
        "status": "dispatched",
        "metadata": {
          "#wa.timestamp": "1715890171",
          "traceparent": "00-3e85b37d7d53417341dfdd6c2fd8125b-6748ed9d445f42da-01",
          "$internalId": "bfedecfb-0d57-4273-9f20-c637e9ae9936",
          "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-46pgm",
          "#uniqueId": "bfedecfb-0d57-4273-9f20-c637e9ae9936",
          "#date_processed": "1715890172457",
          "date_created": "1715890172454",
          "$elapsedTimeToStorage": "00:00:00.0153921"
        }
      },
      {
        "id": "b158e250-b8f9-460b-997b-40db354e5d82",
        "direction": "sent",
        "type": "text/plain",
        "content": "⚠️ *Atenção!* ⚠️\nEssa é uma área restrita para desenvolvedores. 👩‍💻\n\nSe você tem permissão para estar aqui digite a palavra chave para acesso ou se possuir um número cadastrado como administrador digite o número de telefone autorizado, caso contrario digite sair.",
        "date": "2024-05-16T20:09:27.798Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "Boas vindas",
          "#stateId": "welcome",
          "#messageId": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMDRFRjlBNDlCRUM3MDVBODQxNgA=",
          "#previousStateId": "onboarding",
          "#previousStateName": "Início",
          "traceparent": "00-6cc404251eda77238f99f2f2c2a351e7-77540be29be636ea-01",
          "#uniqueId": "6ed7a8bc-0cf4-48fe-b383-bcb4478cc1c1",
          "#date_processed": "1715890167792",
          "date_created": "1715890167778",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "chatbotprincipaltelek1@msging.net/msging-application-builder-hosting-start-q4zpk",
          "#tunnel.originalTo": "4e4b2711-be87-427b-8cc6-335cc86b1b0b@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-rl7bg;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "6ed7a8bc-0cf4-48fe-b383-bcb4478cc1c1",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-rl7bg",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0090527"
        }
      },
      {
        "id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMDRFRjlBNDlCRUM3MDVBODQxNgA=",
        "direction": "received",
        "type": "text/plain",
        "content": "ola",
        "date": "2024-05-16T20:09:26.728Z",
        "status": "dispatched",
        "metadata": {
          "#wa.timestamp": "1715890165",
          "traceparent": "00-6cc404251eda77238f99f2f2c2a351e7-2cbb7b153e62cff9-01",
          "$internalId": "a48bb306-5ae1-4ec4-9bf3-9bc7c4b1738e",
          "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-t45hl",
          "#uniqueId": "a48bb306-5ae1-4ec4-9bf3-9bc7c4b1738e",
          "#date_processed": "1715890166719",
          "date_created": "1715890166717",
          "$elapsedTimeToStorage": "00:00:00.0125455"
        }
      },
      {
        "id": "c2bd8a0c-f20f-4eb7-ade2-b3a3d60b273c",
        "direction": "sent",
        "type": "text/plain",
        "content": "Envie por gentileza uma imagem da guia ou encaminhamento médico solicitado. \n\nSe preferir não enviar uma foto, digite #atendimento.",
        "date": "2024-05-16T20:08:40.711Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "8.5- Pedir Exame e Guia",
          "#stateId": "b5ec06bd-b1ae-4a84-a41d-31d9c1f22f41",
          "#messageId": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMDM0NkYxN0NENjlFQTg0RUFDRgA=",
          "#previousStateId": "e8f7d46f-740b-4238-b6a4-9cd9e5318b9c",
          "#previousStateName": "8.3- Resposta Menu CPF Ativo",
          "traceparent": "00-85d0a7539f33a35f73c7639954322371-bbe03ce55335ff72-01",
          "#uniqueId": "fcff04ac-577c-4636-9f62-a06dec9a86bd",
          "#date_processed": "1715890120705",
          "date_created": "1715890120690",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethramenu@msging.net/msging-application-builder-hosting-start-s9jqv",
          "#tunnel.originalTo": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-cm92l;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "fcff04ac-577c-4636-9f62-a06dec9a86bd",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-cm92l",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0140749"
        }
      },
      {
        "id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMDM0NkYxN0NENjlFQTg0RUFDRgA=",
        "direction": "received",
        "type": "application/vnd.lime.reply+json",
        "content": {
          "replied": {
            "type": "text/plain",
            "value": "Agendamento de exame"
          },
          "inReplyTo": {
            "id": "10528412-de5b-490e-b3e7-a3b46fc1b6f7",
            "type": "application/vnd.lime.select+json",
            "value": {
              "text": "Por favor, escolha a opção desejada:",
              "options": [
                {
                  "text": "Agendamento de consulta"
                },
                {
                  "text": "Agendamento de exame"
                },
                {
                  "text": "Liberação de guia"
                },
                {
                  "text": "Atendimento"
                },
                {
                  "text": "Auxiliar no uso do app"
                },
                {
                  "text": "Outros assuntos"
                },
                {
                  "text": "Número de carteirinha"
                }
              ]
            },
            "direction": "sent"
          }
        },
        "date": "2024-05-16T20:08:39.309Z",
        "status": "dispatched",
        "metadata": {
          "#wa.timestamp": "1715890118",
          "#wa.context.from": "553432937100",
          "#wa.context.id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAERgSRTNENDczNDlGNUNBODRBMTNGAA==",
          "#wa.context.group_id": null,
          "#wa.forwarded": null,
          "#wa.frequently_forwarded": null,
          "#wa.interactive.list.id": "Agendamentodeexame",
          "traceparent": "00-85d0a7539f33a35f73c7639954322371-4edf681ef63a3a3a-01",
          "#inReplyToId": "wamid.HBgMNTUzNDk3ODAxODI5FQIAERgSRTNENDczNDlGNUNBODRBMTNGAA==",
          "#messageReferenceInternalID": "bcb5163c-ee0a-4dd0-9a96-b37cc0fbb13e",
          "$internalId": "95bd7cb4-ba9c-475c-be16-bb90ca0fdbf1",
          "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-5k79j",
          "#uniqueId": "95bd7cb4-ba9c-475c-be16-bb90ca0fdbf1",
          "#date_processed": "1715890119302",
          "date_created": "1715890119299",
          "$elapsedTimeToStorage": "00:00:00.0140545"
        }
      },
      {
        "id": "a9d3eafe-fb9a-42ba-9136-7670eb9c174c",
        "direction": "sent",
        "type": "text/plain",
        "content": "Não consegui compreender sua resposta. <b>Por gentileza, responda considerando a pergunta feita acima</b> 👆🏻",
        "date": "2024-05-16T20:08:25.561Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "8.0 - [MSG] Mensagem de Erro genérico",
          "#stateId": "83283c74-6399-46d5-b4b7-1c21847c5083",
          "#messageId": "context:304085cc-6a25-4555-8b75-eceeb4e01581",
          "#previousStateId": "84e24378-d4b1-486f-9cd9-e6fca5820451",
          "#previousStateName": "7.0 - [VARIABLE] Erro genérico",
          "traceparent": "00-a4d58c7305ede1183999aff75d45cda7-ad4956963c112bdf-01",
          "#uniqueId": "7c28ad15-a981-4bbf-8e0e-56381fe0ef05",
          "#date_processed": "1715890105556",
          "date_created": "1715890105546",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethraexcecao@msging.net/msging-application-builder-hosting-start-xq5z5",
          "#tunnel.originalTo": "2d83dd85-6336-4f13-8f90-ed7918ac1619@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-7p2fp;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "7c28ad15-a981-4bbf-8e0e-56381fe0ef05",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-7p2fp",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0087366"
        }
      },
      {
        "id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMEUzRjQ1RUQ4RENGQ0NFOEIxQQA=",
        "direction": "received",
        "type": "text/plain",
        "content": "teste",
        "date": "2024-05-16T20:08:23.787Z",
        "status": "dispatched",
        "metadata": {
          "#wa.timestamp": "1715890102",
          "traceparent": "00-a4d58c7305ede1183999aff75d45cda7-9947374a51705f92-01",
          "$internalId": "ba2aa421-8313-462b-a290-f5c4a3898a71",
          "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-46pgm",
          "#uniqueId": "ba2aa421-8313-462b-a290-f5c4a3898a71",
          "#date_processed": "1715890103780",
          "date_created": "1715890103776",
          "$elapsedTimeToStorage": "00:00:00.0123754"
        }
      },
      {
        "id": "a894ff01-68d1-455d-a482-b1a402e79c54",
        "direction": "sent",
        "type": "text/plain",
        "content": "Notamos que você ficou ausente por um tempo. Para continuarmos com esse atendimento responda por favor a mensagem abaixo:",
        "date": "2024-05-16T20:07:16.902Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "1.1 - [MSG] Mensagem de Inatividade contagem",
          "#stateId": "0f58d656-4bc7-46c8-bd05-dd2f07b6e610",
          "#messageId": "context:149782db-ecd4-40cb-958f-0eb9883397e0",
          "#previousStateId": "136040a8-586e-4c4d-8490-5f3d1b62a5e8",
          "#previousStateName": "1.0 - [MSG] Contador inatividade",
          "traceparent": "00-a0c04d2011c7d1685f7169d5b419b875-338456e844a868a4-01",
          "#uniqueId": "384cde15-ad88-417d-bd9d-d6fc0d90b41a",
          "#date_processed": "1715890036896",
          "date_created": "1715890036885",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethraexcecao@msging.net/msging-application-builder-hosting-start-xq5z5",
          "#tunnel.originalTo": "2d83dd85-6336-4f13-8f90-ed7918ac1619@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-7p2fp;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "384cde15-ad88-417d-bd9d-d6fc0d90b41a",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-7p2fp",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0089356"
        }
      },
      {
        "id": "10528412-de5b-490e-b3e7-a3b46fc1b6f7",
        "direction": "sent",
        "type": "application/vnd.lime.select+json",
        "content": {
          "text": "Por favor, escolha a opção desejada:",
          "options": [
            {
              "text": "Agendamento de consulta"
            },
            {
              "text": "Agendamento de exame"
            },
            {
              "text": "Liberação de guia"
            },
            {
              "text": "Atendimento"
            },
            {
              "text": "Auxiliar no uso do app"
            },
            {
              "text": "Outros assuntos"
            },
            {
              "text": "Número de carteirinha"
            }
          ]
        },
        "date": "2024-05-16T20:02:14.622Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "8.4- Menu CPF Ativo",
          "#stateId": "a4d36739-a7fb-4f13-9ddf-395206b251a0",
          "#messageId": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMEI5NUI5NEVFQjQyRUQ0REVENQA=",
          "#previousStateId": "6bd2e1de-b19a-47e4-aded-f89772c1c23a",
          "#previousStateName": "8.3- Resposta Email",
          "traceparent": "00-a0c04d2011c7d1685f7169d5b419b875-99190bba633dae78-01",
          "#uniqueId": "bcb5163c-ee0a-4dd0-9a96-b37cc0fbb13e",
          "#date_processed": "1715889734616",
          "date_created": "1715889734604",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethramenu@msging.net/msging-application-builder-hosting-start-ctszz",
          "#tunnel.originalTo": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-cbb8c;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "bcb5163c-ee0a-4dd0-9a96-b37cc0fbb13e",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-cbb8c",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0095337"
        }
      },
      {
        "id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMEI5NUI5NEVFQjQyRUQ0REVENQA=",
        "direction": "received",
        "type": "text/plain",
        "content": "lopes.biel2588@gmail.com",
        "date": "2024-05-16T20:02:13.325Z",
        "status": "dispatched",
        "metadata": {
          "#wa.timestamp": "1715889731",
          "traceparent": "00-a0c04d2011c7d1685f7169d5b419b875-f4bfde965e066512-01",
          "$internalId": "927994d7-145a-49b7-85ce-68a188721569",
          "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-wsfkp",
          "#uniqueId": "927994d7-145a-49b7-85ce-68a188721569",
          "#date_processed": "1715889733319",
          "date_created": "1715889733317",
          "$elapsedTimeToStorage": "00:00:00.0105413"
        }
      },
      {
        "id": "280ab249-24ef-43f8-85da-e2f7c781aea0",
        "direction": "sent",
        "type": "text/plain",
        "content": "Não entendemos o que digitou, por favor digite novamente",
        "date": "2024-05-16T20:01:51.570Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "8.0 - [MSG] Mensagem de Erro genérico",
          "#stateId": "83283c74-6399-46d5-b4b7-1c21847c5083",
          "#messageId": "context:f55cb0ee-010c-435c-bf1e-111462996edb",
          "#previousStateId": "84e24378-d4b1-486f-9cd9-e6fca5820451",
          "#previousStateName": "7.0 - [VARIABLE] Erro genérico",
          "traceparent": "00-16833ce4734613e168e882b5d562bf9b-bd9766da6dc447e3-01",
          "#uniqueId": "e788d754-c6bc-4404-a722-bd316a636900",
          "#date_processed": "1715889711564",
          "date_created": "1715889711554",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethraexcecao@msging.net/msging-application-builder-hosting-start-vdh7j",
          "#tunnel.originalTo": "2d83dd85-6336-4f13-8f90-ed7918ac1619@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-rrbk4;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "e788d754-c6bc-4404-a722-bd316a636900",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-rrbk4",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0090710"
        }
      },
      {
        "id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMDE0NDk2Q0UxMDE5Q0I4OEY0MQA=",
        "direction": "received",
        "type": "text/plain",
        "content": "loeps,dadw",
        "date": "2024-05-16T20:01:50.179Z",
        "status": "dispatched",
        "metadata": {
          "#wa.timestamp": "1715889708",
          "traceparent": "00-16833ce4734613e168e882b5d562bf9b-d781ddfdf4e4439a-01",
          "$internalId": "4fce916d-7a46-4e6e-a1b7-ffc1aedbf33f",
          "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-vfq6s",
          "#uniqueId": "4fce916d-7a46-4e6e-a1b7-ffc1aedbf33f",
          "#date_processed": "1715889710174",
          "date_created": "1715889710171",
          "$elapsedTimeToStorage": "00:00:00.0089039"
        }
      },
      {
        "id": "42b4e39c-64f8-43d4-b850-408628eab5b7",
        "direction": "sent",
        "type": "text/plain",
        "content": "Qual é o seu endereço de *e-mail*?",
        "date": "2024-05-16T20:01:36.310Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "8.2- Pedir Email",
          "#stateId": "05accb02-41cb-4cf3-ba9e-9507c9c42ed9",
          "#messageId": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMEYwNTAyNDZERjk3NEM3RkFENwA=",
          "#previousStateId": "964576af-886f-44bc-92ef-af4fb8762ce7",
          "#previousStateName": "8.1- Resposta CPF para atendimento",
          "traceparent": "00-9cdbacf2ca6a7bc48231774247669c13-9a7ba6922e7ff677-01",
          "#uniqueId": "f05dc9d2-7022-421c-a1c1-e56099b7bf14",
          "#date_processed": "1715889696304",
          "date_created": "1715889696292",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethramenu@msging.net/msging-application-builder-hosting-start-vdh7j",
          "#tunnel.originalTo": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-rrbk4;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "f05dc9d2-7022-421c-a1c1-e56099b7bf14",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-rrbk4",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0108289"
        }
      },
      {
        "id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMEYwNTAyNDZERjk3NEM3RkFENwA=",
        "direction": "received",
        "type": "text/plain",
        "content": "123456789999",
        "date": "2024-05-16T20:01:34.843Z",
        "status": "dispatched",
        "metadata": {
          "#wa.timestamp": "1715889693",
          "traceparent": "00-9cdbacf2ca6a7bc48231774247669c13-56629699586682d1-01",
          "$internalId": "202628c8-3cbb-4b83-aa5e-dfc05268b4f3",
          "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-vfq6s",
          "#uniqueId": "202628c8-3cbb-4b83-aa5e-dfc05268b4f3",
          "#date_processed": "1715889694835",
          "date_created": "1715889694832",
          "$elapsedTimeToStorage": "00:00:00.0121115"
        }
      },
      {
        "id": "0cc922a8-6823-44dc-8cd1-b4e3b01941e9",
        "direction": "sent",
        "type": "text/plain",
        "content": "Por favor, forneça o *CPF da pessoa que deseja atendimento*.",
        "date": "2024-05-16T20:00:33.213Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "8.0- CPF Ativo Pedir CPF Atendimento",
          "#stateId": "66119122-fb27-4f6d-8649-899e929d417a",
          "#messageId": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMEIyNTNEM0U2NDcyNzFEREYzQQA=",
          "#previousStateId": "e9658018-7c6e-4224-9af2-5484cd52f1c9",
          "#previousStateName": "[SCRIPT] Resposta CPF/CNPJ",
          "traceparent": "00-789565e2e4c54b5e41ed5b1b90b43a49-243074eaa5950989-01",
          "#uniqueId": "e777aaab-4375-4caf-b5e0-fc5c66d1db1b",
          "#date_processed": "1715889633208",
          "date_created": "1715889633194",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethramenu@msging.net/msging-application-builder-hosting-start-hgmgn",
          "#tunnel.originalTo": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-jwq9r;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "e777aaab-4375-4caf-b5e0-fc5c66d1db1b",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-jwq9r",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0091010"
        }
      },
      {
        "id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMEIyNTNEM0U2NDcyNzFEREYzQQA=",
        "direction": "received",
        "type": "text/plain",
        "content": "123456789999",
        "date": "2024-05-16T20:00:31.578Z",
        "status": "dispatched",
        "metadata": {
          "#wa.timestamp": "1715889630",
          "traceparent": "00-789565e2e4c54b5e41ed5b1b90b43a49-e6c1c9880c895613-01",
          "$internalId": "73184651-f05c-4c03-ba0d-611ace8a9f48",
          "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-5h9h5",
          "#uniqueId": "73184651-f05c-4c03-ba0d-611ace8a9f48",
          "#date_processed": "1715889631572",
          "date_created": "1715889631569",
          "$elapsedTimeToStorage": "00:00:00.0104868"
        }
      },
      {
        "id": "988eb8c2-2242-4805-9c5b-2698e803b178",
        "direction": "sent",
        "type": "text/plain",
        "content": "Qual o *CPF do titular* do plano de saúde?",
        "date": "2024-05-16T20:00:19.730Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "[MSG]perguntando o CPF / CNPJ",
          "#stateId": "7c2cb5dc-74cd-406e-8c14-45375f96e0ee",
          "#messageId": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMDkxQ0Y5QTBDOURDREQ0Q0JFNwA=",
          "#previousStateId": "1d7d0068-b064-4f92-ab25-d3d30d1b2dc5",
          "#previousStateName": "16.2- Resposta Matricula",
          "traceparent": "00-40a0e865f2f18c14e0d95ee4aa17ecf7-801cada0d4392006-01",
          "#uniqueId": "20de581d-a3f5-489a-9a48-4b993b852a80",
          "#date_processed": "1715889619724",
          "date_created": "1715889619715",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethramenu@msging.net/msging-application-builder-hosting-start-nfdkl",
          "#tunnel.originalTo": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-klhvb;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "20de581d-a3f5-489a-9a48-4b993b852a80",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-klhvb",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0085722"
        }
      },
      {
        "id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMDkxQ0Y5QTBDOURDREQ0Q0JFNwA=",
        "direction": "received",
        "type": "text/plain",
        "content": "5094",
        "date": "2024-05-16T20:00:18.212Z",
        "status": "dispatched",
        "metadata": {
          "#wa.timestamp": "1715889617",
          "traceparent": "00-40a0e865f2f18c14e0d95ee4aa17ecf7-b06be206c67ae49b-01",
          "$internalId": "586870ef-3d33-413d-acdd-2bf9b051a1dc",
          "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-w2xjm",
          "#uniqueId": "586870ef-3d33-413d-acdd-2bf9b051a1dc",
          "#date_processed": "1715889618207",
          "date_created": "1715889618204",
          "$elapsedTimeToStorage": "00:00:00.0100623"
        }
      },
      {
        "id": "651e1477-4f45-418f-ae06-a9fd0bf2a071",
        "direction": "sent",
        "type": "text/plain",
        "content": "Qual o número da matrícula do funcionário?",
        "date": "2024-05-16T20:00:03.874Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "16.1- Pedir Matricula",
          "#stateId": "435acfba-48ae-4fbf-a2ff-4a83e3dd9334",
          "#messageId": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMEY3NDE2MDlBOTFFOEVDNUU4NQA=",
          "#previousStateId": "d568bf38-5cef-421d-b3d0-3798f9b599d1",
          "#previousStateName": "3.1- Resposta Plano de Saude ou RH",
          "traceparent": "00-0963458619dd437b3dfbfd4692ec5164-521112e540113c2d-01",
          "#uniqueId": "70f86caf-6d79-4a5e-8381-b4795d015900",
          "#date_processed": "1715889603868",
          "date_created": "1715889603858",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethramenu@msging.net/msging-application-builder-hosting-start-hgmgn",
          "#tunnel.originalTo": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-jwq9r;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "70f86caf-6d79-4a5e-8381-b4795d015900",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-jwq9r",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0087069"
        }
      },
      {
        "id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMEY3NDE2MDlBOTFFOEVDNUU4NQA=",
        "direction": "received",
        "type": "application/vnd.lime.reply+json",
        "content": {
          "replied": {
            "type": "text/plain",
            "value": "Plano de Saúde"
          },
          "inReplyTo": {
            "id": "40fefe0e-1a46-459a-869c-dc08a7a29f42",
            "type": "application/vnd.lime.select+json",
            "value": {
              "scope": "immediate",
              "text": "Por favor, escolha a opção desejada:",
              "options": [
                {
                  "text": "Plano de Saúde"
                },
                {
                  "text": "Atendimento RH"
                }
              ]
            },
            "direction": "sent"
          }
        },
        "date": "2024-05-16T20:00:02.420Z",
        "status": "dispatched",
        "metadata": {
          "#wa.timestamp": "1715889601",
          "#wa.context.from": "553432937100",
          "#wa.context.id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAERgSOEMxMUI5RDE2REUxMTE2NTU3AA==",
          "#wa.context.group_id": null,
          "#wa.forwarded": null,
          "#wa.frequently_forwarded": null,
          "#wa.interactive.button.id": "PlanodeSaúde",
          "#wa.message.id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAERgSOEMxMUI5RDE2REUxMTE2NTU3AA==",
          "traceparent": "00-0963458619dd437b3dfbfd4692ec5164-d77304adc804fcb8-01",
          "#inReplyToId": "wamid.HBgMNTUzNDk3ODAxODI5FQIAERgSOEMxMUI5RDE2REUxMTE2NTU3AA==",
          "#messageReferenceInternalID": "f9673bf7-fc0f-4673-823c-96938341fd87",
          "$internalId": "af57e55a-1482-496a-97fc-f671b719d716",
          "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-5h9h5",
          "#uniqueId": "af57e55a-1482-496a-97fc-f671b719d716",
          "#date_processed": "1715889602411",
          "date_created": "1715889602408",
          "$elapsedTimeToStorage": "00:00:00.0138775"
        }
      },
      {
        "id": "40fefe0e-1a46-459a-869c-dc08a7a29f42",
        "direction": "sent",
        "type": "application/vnd.lime.select+json",
        "content": {
          "scope": "immediate",
          "text": "Por favor, escolha a opção desejada:",
          "options": [
            {
              "text": "Plano de Saúde"
            },
            {
              "text": "Atendimento RH"
            }
          ]
        },
        "date": "2024-05-16T19:59:54.079Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "3.0- Menu Plano Saude ou RH",
          "#stateId": "cf66bef4-4952-4850-b896-bba1154e11af",
          "#messageId": "context:07c0882f-301c-4278-a21f-7ea2d5b22208",
          "#previousStateId": "64a46c6a-189a-4d3a-a681-7e96304b4c6c",
          "#previousStateName": "2.0- Boas Vindas",
          "traceparent": "00-c51654d31fc4049058e9717988ea692e-74e0cd1c788ed77a-01",
          "#uniqueId": "f9673bf7-fc0f-4673-823c-96938341fd87",
          "#date_processed": "1715889594073",
          "date_created": "1715889594064",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethramenu@msging.net/msging-application-builder-hosting-start-s9jqv",
          "#tunnel.originalTo": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-cm92l;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "f9673bf7-fc0f-4673-823c-96938341fd87",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-cm92l",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0090254"
        }
      },
      {
        "id": "f2a8b52f-f89c-439c-9689-b8bd6cc0870b",
        "direction": "sent",
        "type": "text/plain",
        "content": "Ao continuar com este atendimento, você expressa concordância com a nossa política de privacidade, disponível no link abaixo em nosso site:\nhttps://www.aethra.com.br/br/policy/",
        "date": "2024-05-16T19:59:53.063Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "2.0- Boas Vindas",
          "#stateId": "64a46c6a-189a-4d3a-a681-7e96304b4c6c",
          "#messageId": "context:07c0882f-301c-4278-a21f-7ea2d5b22208",
          "#previousStateId": "53ad7529-3fea-4c00-b694-d4abc4e62e32",
          "#previousStateName": "1.0- Checar redirecionamento para bloco específico",
          "traceparent": "00-c51654d31fc4049058e9717988ea692e-4927c33501e210af-01",
          "#uniqueId": "f6d407e9-b594-4d31-b9c8-47b58b1c16db",
          "#date_processed": "1715889593056",
          "date_created": "1715889593046",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethramenu@msging.net/msging-application-builder-hosting-start-s9jqv",
          "#tunnel.originalTo": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-cm92l;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "f6d407e9-b594-4d31-b9c8-47b58b1c16db",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-cm92l",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0100722"
        }
      },
      {
        "id": "d1ba7063-ee0c-4cab-8d69-b0dc5af79ba9",
        "direction": "sent",
        "type": "text/plain",
        "content": "Seja bem-vindo(a) ao atendimento da *Aethra*",
        "date": "2024-05-16T19:59:52.053Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "2.0- Boas Vindas",
          "#stateId": "64a46c6a-189a-4d3a-a681-7e96304b4c6c",
          "#messageId": "context:07c0882f-301c-4278-a21f-7ea2d5b22208",
          "#previousStateId": "53ad7529-3fea-4c00-b694-d4abc4e62e32",
          "#previousStateName": "1.0- Checar redirecionamento para bloco específico",
          "traceparent": "00-c51654d31fc4049058e9717988ea692e-cbb30fba3997f380-01",
          "#uniqueId": "5a1b53f1-d200-48cf-a445-a0a473947f0b",
          "#date_processed": "1715889592049",
          "date_created": "1715889592039",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethramenu@msging.net/msging-application-builder-hosting-start-s9jqv",
          "#tunnel.originalTo": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-cm92l;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "5a1b53f1-d200-48cf-a445-a0a473947f0b",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-cm92l",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0079597"
        }
      },
      {
        "id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMERGOEM3RERDNTk4QzdDMTUwMgA=",
        "direction": "received",
        "type": "text/plain",
        "content": "aethra",
        "date": "2024-05-16T19:59:50.247Z",
        "status": "dispatched",
        "metadata": {
          "#wa.timestamp": "1715889588",
          "traceparent": "00-c51654d31fc4049058e9717988ea692e-8fcc8c4644658c2e-01",
          "$internalId": "1814a042-f120-4d5f-86e3-a87699778752",
          "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-5k79j",
          "#uniqueId": "1814a042-f120-4d5f-86e3-a87699778752",
          "#date_processed": "1715889590241",
          "date_created": "1715889590239",
          "$elapsedTimeToStorage": "00:00:00.0093820"
        }
      },
      {
        "id": "0d48ca44-cb85-4527-8ac1-50f454a95082",
        "direction": "sent",
        "type": "text/plain",
        "content": "⚠️ *Atenção!* ⚠️\nEssa é uma área restrita para desenvolvedores. 👩‍💻\n\nSe você tem permissão para estar aqui digite a palavra chave para acesso ou se possuir um número cadastrado como administrador digite o número de telefone autorizado, caso contrario digite sair.",
        "date": "2024-05-16T19:59:37.301Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "Boas vindas",
          "#stateId": "welcome",
          "#messageId": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMDA2NEJFQzUxN0QzMTdBMkFEOQA=",
          "#previousStateId": "onboarding",
          "#previousStateName": "Início",
          "traceparent": "00-0a9da9b0174301010479716b61fdb316-3b864d7ef9002ea2-01",
          "#uniqueId": "87e04111-c372-4297-85f4-d597ebda2c85",
          "#date_processed": "1715889577295",
          "date_created": "1715889577282",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "chatbotprincipaltelek1@msging.net/msging-application-builder-hosting-start-q4zpk",
          "#tunnel.originalTo": "4e4b2711-be87-427b-8cc6-335cc86b1b0b@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-rl7bg;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "87e04111-c372-4297-85f4-d597ebda2c85",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-rl7bg",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0095131"
        }
      },
      {
        "id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMDA2NEJFQzUxN0QzMTdBMkFEOQA=",
        "direction": "received",
        "type": "text/plain",
        "content": "ola",
        "date": "2024-05-16T19:59:35.988Z",
        "status": "dispatched",
        "metadata": {
          "#wa.timestamp": "1715889574",
          "traceparent": "00-0a9da9b0174301010479716b61fdb316-61a473bcd6bf4467-01",
          "$internalId": "6d2bda20-1f98-4eee-acb8-c449e1758366",
          "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-t45hl",
          "#uniqueId": "6d2bda20-1f98-4eee-acb8-c449e1758366",
          "#date_processed": "1715889575983",
          "date_created": "1715889575981",
          "$elapsedTimeToStorage": "00:00:00.0088529"
        }
      },
      {
        "id": "1a4ed683-28b9-48f7-bf16-f9fd189b313d",
        "direction": "sent",
        "type": "text/plain",
        "content": "Verificamos que o CPF digitado não corresponde com a matrícula informada anteriormente. Poderia confirmar se o número digitado está correto e digitar novamente?",
        "date": "2024-05-16T19:58:34.208Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "7.6 - Matricula diferente do cpf",
          "#stateId": "353a3a5c-dc88-4d3b-b6c4-3947322342be",
          "#messageId": "context:25670c1c-2573-4a6a-bb82-b9d316c0665e",
          "#previousStateId": "84e24378-d4b1-486f-9cd9-e6fca5820451",
          "#previousStateName": "7.0 - [VARIABLE] Erro genérico",
          "traceparent": "00-2a869835b9fb4c81c51e24da85c0981e-c2ff87e74bb23a60-01",
          "#uniqueId": "56574d3e-9505-4999-aafa-e859589aeec9",
          "#date_processed": "1715889514198",
          "date_created": "1715889514188",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethraexcecao@msging.net/msging-application-builder-hosting-start-ms2cm",
          "#tunnel.originalTo": "2d83dd85-6336-4f13-8f90-ed7918ac1619@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-qdqlq;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "56574d3e-9505-4999-aafa-e859589aeec9",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-qdqlq",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0127514"
        }
      },
      {
        "id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMDE0MzVDOTIwMjNCODBFOTZCOAA=",
        "direction": "received",
        "type": "text/plain",
        "content": "16095357667",
        "date": "2024-05-16T19:58:32.455Z",
        "status": "dispatched",
        "metadata": {
          "#wa.timestamp": "1715889509",
          "traceparent": "00-2a869835b9fb4c81c51e24da85c0981e-de421b2feaec37e9-01",
          "$internalId": "6ddd8dca-baaa-4ade-8b33-aabac7b99b65",
          "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-52p8j",
          "#uniqueId": "6ddd8dca-baaa-4ade-8b33-aabac7b99b65",
          "#date_processed": "1715889512449",
          "date_created": "1715889512446",
          "$elapsedTimeToStorage": "00:00:00.0101725"
        }
      },
      {
        "id": "e0e18b5c-115c-4fbf-85f7-8d1aa41ccbcb",
        "direction": "sent",
        "type": "text/plain",
        "content": "Qual o *CPF do titular* do plano de saúde?",
        "date": "2024-05-16T19:58:19.774Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "[MSG]perguntando o CPF / CNPJ",
          "#stateId": "7c2cb5dc-74cd-406e-8c14-45375f96e0ee",
          "#messageId": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMDhEREEyMkI2QkRCM0MzRDg4MgA=",
          "#previousStateId": "1d7d0068-b064-4f92-ab25-d3d30d1b2dc5",
          "#previousStateName": "16.2- Resposta Matricula",
          "traceparent": "00-ba3e09eea76520e508a03c0ab8f4857d-5d6f289ec8928eb1-01",
          "#uniqueId": "bceb2e31-4814-4e01-aaf9-f5405c34528f",
          "#date_processed": "1715889499768",
          "date_created": "1715889499756",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethramenu@msging.net/msging-application-builder-hosting-start-s9jqv",
          "#tunnel.originalTo": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-cm92l;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "bceb2e31-4814-4e01-aaf9-f5405c34528f",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-cm92l",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0098549"
        }
      },
      {
        "id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMDhEREEyMkI2QkRCM0MzRDg4MgA=",
        "direction": "received",
        "type": "text/plain",
        "content": "53",
        "date": "2024-05-16T19:58:18.318Z",
        "status": "dispatched",
        "metadata": {
          "#wa.timestamp": "1715889497",
          "traceparent": "00-ba3e09eea76520e508a03c0ab8f4857d-b005df9503a68008-01",
          "$internalId": "a2c9d8fd-e4fa-45ff-afee-9d6c60c69f8b",
          "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-5k79j",
          "#uniqueId": "a2c9d8fd-e4fa-45ff-afee-9d6c60c69f8b",
          "#date_processed": "1715889498306",
          "date_created": "1715889498302",
          "$elapsedTimeToStorage": "00:00:00.0167194"
        }
      },
      {
        "id": "69a518d3-843d-4aa9-a7cd-bd963e5b0b43",
        "direction": "sent",
        "type": "text/plain",
        "content": "Qual o número da matrícula do funcionário?",
        "date": "2024-05-16T19:58:15.548Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "16.1- Pedir Matricula",
          "#stateId": "435acfba-48ae-4fbf-a2ff-4a83e3dd9334",
          "#messageId": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMEREQkQ2NjU4M0YzMjg2ODUxNwA=",
          "#previousStateId": "d568bf38-5cef-421d-b3d0-3798f9b599d1",
          "#previousStateName": "3.1- Resposta Plano de Saude ou RH",
          "traceparent": "00-01f4524048d921f72b5fce94ef20a6f4-c4a6d5ea62a4ac37-01",
          "#uniqueId": "052f22e0-e96f-48e8-8a2e-b961ec4d3217",
          "#date_processed": "1715889495543",
          "date_created": "1715889495534",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethramenu@msging.net/msging-application-builder-hosting-start-ms2cm",
          "#tunnel.originalTo": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-qdqlq;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "052f22e0-e96f-48e8-8a2e-b961ec4d3217",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-qdqlq",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0075895"
        }
      },
      {
        "id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMEREQkQ2NjU4M0YzMjg2ODUxNwA=",
        "direction": "received",
        "type": "application/vnd.lime.reply+json",
        "content": {
          "replied": {
            "type": "text/plain",
            "value": "Plano de Saúde"
          },
          "inReplyTo": {
            "id": "0395bdf5-615f-4451-bd30-d292b49d6850",
            "type": "application/vnd.lime.select+json",
            "value": {
              "scope": "immediate",
              "text": "Por favor, escolha a opção desejada:",
              "options": [
                {
                  "text": "Plano de Saúde"
                },
                {
                  "text": "Atendimento RH"
                }
              ]
            },
            "direction": "sent"
          }
        },
        "date": "2024-05-16T19:58:14.258Z",
        "status": "dispatched",
        "metadata": {
          "#wa.timestamp": "1715889493",
          "#wa.context.from": "553432937100",
          "#wa.context.id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAERgSNDIyNjcyNDdCNDZEMTIyQzNGAA==",
          "#wa.context.group_id": null,
          "#wa.forwarded": null,
          "#wa.frequently_forwarded": null,
          "#wa.interactive.button.id": "PlanodeSaúde",
          "#wa.message.id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAERgSNDIyNjcyNDdCNDZEMTIyQzNGAA==",
          "traceparent": "00-01f4524048d921f72b5fce94ef20a6f4-6e5a566e9aa696cf-01",
          "#inReplyToId": "wamid.HBgMNTUzNDk3ODAxODI5FQIAERgSNDIyNjcyNDdCNDZEMTIyQzNGAA==",
          "#messageReferenceInternalID": "7da8192a-2437-4452-b150-dfd73a625372",
          "$internalId": "a23efe36-ba7f-43a1-8527-8b8c3f9ec7ab",
          "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-52p8j",
          "#uniqueId": "a23efe36-ba7f-43a1-8527-8b8c3f9ec7ab",
          "#date_processed": "1715889494244",
          "date_created": "1715889494241",
          "$elapsedTimeToStorage": "00:00:00.0181238"
        }
      },
      {
        "id": "0395bdf5-615f-4451-bd30-d292b49d6850",
        "direction": "sent",
        "type": "application/vnd.lime.select+json",
        "content": {
          "scope": "immediate",
          "text": "Por favor, escolha a opção desejada:",
          "options": [
            {
              "text": "Plano de Saúde"
            },
            {
              "text": "Atendimento RH"
            }
          ]
        },
        "date": "2024-05-16T19:57:20.015Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "3.0- Menu Plano Saude ou RH",
          "#stateId": "cf66bef4-4952-4850-b896-bba1154e11af",
          "#messageId": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMDkwMjNGRjUzMUUzNDkwNUZENgA=",
          "#previousStateId": "64a46c6a-189a-4d3a-a681-7e96304b4c6c",
          "#previousStateName": "2.0- Boas Vindas",
          "traceparent": "00-47d7549330df75bfcee74d6981f4dff5-7198d18585c5fc64-01",
          "#uniqueId": "7da8192a-2437-4452-b150-dfd73a625372",
          "#date_processed": "1715889440008",
          "date_created": "1715889439997",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethramenu@msging.net/msging-application-builder-hosting-start-nfdkl",
          "#tunnel.originalTo": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-klhvb;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "7da8192a-2437-4452-b150-dfd73a625372",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-klhvb",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0116479"
        }
      },
      {
        "id": "c5b504cf-1e7f-49b3-812b-15931c9fc5e8",
        "direction": "sent",
        "type": "text/plain",
        "content": "Ao continuar com este atendimento, você expressa concordância com a nossa política de privacidade, disponível no link abaixo em nosso site:\nhttps://www.aethra.com.br/br/policy/",
        "date": "2024-05-16T19:57:18.996Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "2.0- Boas Vindas",
          "#stateId": "64a46c6a-189a-4d3a-a681-7e96304b4c6c",
          "#messageId": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMDkwMjNGRjUzMUUzNDkwNUZENgA=",
          "#previousStateId": "53ad7529-3fea-4c00-b694-d4abc4e62e32",
          "#previousStateName": "1.0- Checar redirecionamento para bloco específico",
          "traceparent": "00-47d7549330df75bfcee74d6981f4dff5-8b4f4612a31aa25f-01",
          "#uniqueId": "8b73bdc3-a5a1-428c-81fb-e59f138e470e",
          "#date_processed": "1715889438990",
          "date_created": "1715889438981",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethramenu@msging.net/msging-application-builder-hosting-start-nfdkl",
          "#tunnel.originalTo": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-klhvb;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "8b73bdc3-a5a1-428c-81fb-e59f138e470e",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-klhvb",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0083592"
        }
      },
      {
        "id": "5cfd9a23-fedd-43b8-8588-96965c2fa7a5",
        "direction": "sent",
        "type": "text/plain",
        "content": "Seja bem-vindo(a) ao atendimento da *Aethra*",
        "date": "2024-05-16T19:57:17.991Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "2.0- Boas Vindas",
          "#stateId": "64a46c6a-189a-4d3a-a681-7e96304b4c6c",
          "#messageId": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMDkwMjNGRjUzMUUzNDkwNUZENgA=",
          "#previousStateId": "53ad7529-3fea-4c00-b694-d4abc4e62e32",
          "#previousStateName": "1.0- Checar redirecionamento para bloco específico",
          "traceparent": "00-47d7549330df75bfcee74d6981f4dff5-2d003496de2a5cf7-01",
          "#uniqueId": "13773462-0462-499f-aa1e-414ca254fcfc",
          "#date_processed": "1715889437987",
          "date_created": "1715889437977",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethramenu@msging.net/msging-application-builder-hosting-start-nfdkl",
          "#tunnel.originalTo": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-klhvb;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "13773462-0462-499f-aa1e-414ca254fcfc",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-klhvb",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0073947"
        }
      },
      {
        "id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMDkwMjNGRjUzMUUzNDkwNUZENgA=",
        "direction": "received",
        "type": "text/plain",
        "content": "ola",
        "date": "2024-05-16T19:57:16.135Z",
        "status": "dispatched",
        "metadata": {
          "#wa.timestamp": "1715889434",
          "traceparent": "00-47d7549330df75bfcee74d6981f4dff5-05268ddfb316eeef-01",
          "$internalId": "275760ff-fb1b-4199-a341-32e7799710b4",
          "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-w2xjm",
          "#uniqueId": "275760ff-fb1b-4199-a341-32e7799710b4",
          "#date_processed": "1715889436124",
          "date_created": "1715889436101",
          "$elapsedTimeToStorage": "00:00:00.0384959"
        }
      },
      {
        "id": "2117a477-df9b-4ed8-909a-68ddcd6eb985",
        "direction": "sent",
        "type": "text/plain",
        "content": "A *Aethra* agradece o seu contato, até breve.",
        "date": "2024-05-16T19:57:05.362Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "4.0 - Finalizar Cliente",
          "#stateId": "9a32e0a7-a95f-4d85-9398-bb83c2af8132",
          "#messageId": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMDc0QUUwRjUzM0YzNDk0MjE4OQA=",
          "#previousStateId": "19a6e4f9-bffa-44d6-b0d4-6d4b9f473067",
          "#previousStateName": "[MSG+INPUT] 2.0 - P1 - Nota Bot",
          "traceparent": "00-4acf2f984006aeaa9c6f4634d34f5a32-fafea56617e1ce5c-01",
          "#uniqueId": "8625e591-40a9-4682-86b2-0985a53eeb30",
          "#date_processed": "1715889425357",
          "date_created": "1715889425347",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethrapesquisa@msging.net/msging-application-builder-hosting-start-67r6z",
          "#tunnel.originalTo": "af599b08-08ef-4f25-9ac5-0d480d7f48a8@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-vc6mm;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "8625e591-40a9-4682-86b2-0985a53eeb30",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-vc6mm",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0087186"
        }
      },
      {
        "id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMDc0QUUwRjUzM0YzNDk0MjE4OQA=",
        "direction": "received",
        "type": "application/vnd.lime.reply+json",
        "content": {
          "replied": {
            "type": "text/plain",
            "value": "Não"
          },
          "inReplyTo": {
            "id": "9f30be6a-e150-404e-8fe8-caa0da3c69fb",
            "type": "application/vnd.lime.select+json",
            "value": {
              "scope": "immediate",
              "text": "Gostaria de avaliar nosso atendimento? ",
              "options": [
                {
                  "text": "Sim"
                },
                {
                  "text": "Não"
                }
              ]
            },
            "direction": "sent"
          }
        },
        "date": "2024-05-16T19:57:04.054Z",
        "status": "dispatched",
        "metadata": {
          "#wa.timestamp": "1715889422",
          "#wa.context.from": "553432937100",
          "#wa.context.id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAERgSREZENjlEMEVFM0NBRTIxRUE2AA==",
          "#wa.context.group_id": null,
          "#wa.forwarded": null,
          "#wa.frequently_forwarded": null,
          "#wa.interactive.button.id": "Não",
          "#wa.message.id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAERgSREZENjlEMEVFM0NBRTIxRUE2AA==",
          "traceparent": "00-4acf2f984006aeaa9c6f4634d34f5a32-ab43795af16352a3-01",
          "#inReplyToId": "wamid.HBgMNTUzNDk3ODAxODI5FQIAERgSREZENjlEMEVFM0NBRTIxRUE2AA==",
          "#messageReferenceInternalID": "7e7185bd-dd18-45c5-a980-17184909f0a9",
          "$internalId": "05986fe2-ad4b-4ffa-9fa4-c6c15b42f57c",
          "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-bxrpm",
          "#uniqueId": "05986fe2-ad4b-4ffa-9fa4-c6c15b42f57c",
          "#date_processed": "1715889424046",
          "date_created": "1715889424043",
          "$elapsedTimeToStorage": "00:00:00.0120638"
        }
      },
      {
        "id": "9f30be6a-e150-404e-8fe8-caa0da3c69fb",
        "direction": "sent",
        "type": "application/vnd.lime.select+json",
        "content": {
          "scope": "immediate",
          "text": "Gostaria de avaliar nosso atendimento? ",
          "options": [
            {
              "text": "Sim"
            },
            {
              "text": "Não"
            }
          ]
        },
        "date": "2024-05-16T19:56:59.502Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "[MSG+INPUT] 2.0 - P1 - Nota Bot",
          "#stateId": "19a6e4f9-bffa-44d6-b0d4-6d4b9f473067",
          "#messageId": "context:fa9c5c6c-37f6-4803-a4f9-ea01006a9b2d",
          "#previousStateId": "0406a3c0-539e-4a6a-8143-fa79c3fdc76a",
          "#previousStateName": "1.1 - Verificar Canal",
          "traceparent": "00-483054c70aa59478a730ea5dbaf42f94-38273954714095ef-01",
          "#uniqueId": "7e7185bd-dd18-45c5-a980-17184909f0a9",
          "#date_processed": "1715889419497",
          "date_created": "1715889419486",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethrapesquisa@msging.net/msging-application-builder-hosting-start-stsvg",
          "#tunnel.originalTo": "af599b08-08ef-4f25-9ac5-0d480d7f48a8@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-2spzt;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "7e7185bd-dd18-45c5-a980-17184909f0a9",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-2spzt",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0083072"
        }
      },
      {
        "id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMDA0RDk2N0E4QzkzOTU1Njg0QwA=",
        "direction": "received",
        "type": "text/plain",
        "content": "#sair",
        "date": "2024-05-16T19:56:57.765Z",
        "status": "dispatched",
        "metadata": {
          "#wa.timestamp": "1715889416",
          "traceparent": "00-483054c70aa59478a730ea5dbaf42f94-bdc28b7e1b766e3f-01",
          "$internalId": "ca350546-e8d2-4eb1-891a-fc70c943e4cf",
          "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-bl6sn",
          "#uniqueId": "ca350546-e8d2-4eb1-891a-fc70c943e4cf",
          "#date_processed": "1715889417758",
          "date_created": "1715889417756",
          "$elapsedTimeToStorage": "00:00:00.0094063"
        }
      },
      {
        "id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMDA3NTM1OEEwNzFBQzE3RUFBOQA=",
        "direction": "received",
        "type": "text/plain",
        "content": "ola]",
        "date": "2024-05-16T19:56:11.157Z",
        "status": "dispatched",
        "metadata": {
          "#wa.timestamp": "1715889368",
          "traceparent": "00-754afc6e3cf834c8dbaf0ab6a3d692b1-63182fcd0e84f5dd-01",
          "$internalId": "317fc2fc-623d-4ce8-94cd-ab9eccb58bf4",
          "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-t45hl",
          "#uniqueId": "317fc2fc-623d-4ce8-94cd-ab9eccb58bf4",
          "#date_processed": "1715889371147",
          "date_created": "1715889371144",
          "$elapsedTimeToStorage": "00:00:00.0135744"
        }
      },
      {
        "id": "13cabfbc-055c-400e-9804-018f81dd2b65",
        "direction": "received",
        "type": "application/vnd.iris.ticket+json",
        "content": {
          "id": "13cabfbc-055c-400e-9804-018f81dd2b65",
          "sequentialId": 160,
          "ownerIdentity": "aethraatendimentohumano@msging.net",
          "customerIdentity": "8ec3f015-c3ff-43e7-b8cb-88210ea79978@tunnel.msging.net",
          "customerDomain": "wa.gw.msging.net",
          "provider": "Lime",
          "status": "Waiting",
          "storageDate": "2024-05-16T14:45:06.533Z",
          "externalId": "13cabfbc-055c-400e-9804-018f81dd2b65",
          "rating": 0,
          "team": "Default",
          "unreadMessages": 0,
          "closed": false,
          "customerInput": {
            "type": "text/plain",
            "value": "oi"
          },
          "priority": 0
        },
        "date": "2024-05-16T14:45:06.579Z"
      },
      {
        "id": "ca4f630a-2a0b-45e7-b7b6-b0d218635df8",
        "direction": "sent",
        "type": "text/plain",
        "content": "Aguarde um momento enquanto te transfiro para um de nossos especialistas...",
        "date": "2024-05-16T14:45:05.709Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "1.2 - [MSG] Mensagem de transbordo atendente",
          "#stateId": "d2438ccf-befe-4c3b-ba66-5dd02fd56229",
          "#messageId": "context:7b71fa4c-715b-41f6-a213-d0033ec8c90e",
          "#previousStateId": "136040a8-586e-4c4d-8490-5f3d1b62a5e8",
          "#previousStateName": "1.0 - [MSG] Contador inatividade",
          "traceparent": "00-5cafe8e84377da11cdd9c61c0367df03-3fcf5bbcb04ebc78-01",
          "#uniqueId": "35a4b249-3e59-4a31-b2f0-5d5169d2d431",
          "#date_processed": "1715870705704",
          "date_created": "1715870705695",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethraexcecao@msging.net/msging-application-builder-hosting-start-nfdkl",
          "#tunnel.originalTo": "2d83dd85-6336-4f13-8f90-ed7918ac1619@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-klhvb;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "35a4b249-3e59-4a31-b2f0-5d5169d2d431",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-klhvb",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0080227"
        }
      },
      {
        "id": "0bebd7fc-3bd7-4d49-88cc-40fa5d875753",
        "direction": "sent",
        "type": "text/plain",
        "content": "Qual é o seu endereço de *e-mail*?",
        "date": "2024-05-16T14:40:04.350Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "8.2- Pedir Email",
          "#stateId": "05accb02-41cb-4cf3-ba9e-9507c9c42ed9",
          "#messageId": "context:ac69b749-6fbe-486b-8d18-7ee78446d3fe",
          "#previousStateId": "53ad7529-3fea-4c00-b694-d4abc4e62e32",
          "#previousStateName": "1.0- Checar redirecionamento para bloco específico",
          "traceparent": "00-5cafe8e84377da11cdd9c61c0367df03-94f4f8f63b8c59b2-01",
          "#uniqueId": "e53d8309-f847-496f-8472-6747840bbf4b",
          "#date_processed": "1715870404344",
          "date_created": "1715870404335",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethramenu@msging.net/msging-application-builder-hosting-start-q4zpk",
          "#tunnel.originalTo": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-rl7bg;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "e53d8309-f847-496f-8472-6747840bbf4b",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-rl7bg",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0090567"
        }
      },
      {
        "id": "ad9802bc-85b4-4800-828c-f96342738d49",
        "direction": "sent",
        "type": "text/plain",
        "content": "Notamos que você ficou ausente por um tempo. Para continuarmos com esse atendimento responda por favor a mensagem abaixo:",
        "date": "2024-05-16T14:40:02.864Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "1.1 - [MSG] Mensagem de Inatividade contagem",
          "#stateId": "0f58d656-4bc7-46c8-bd05-dd2f07b6e610",
          "#messageId": "context:3bb542a0-9a9e-4f85-be89-e4f3eb36aa27",
          "#previousStateId": "136040a8-586e-4c4d-8490-5f3d1b62a5e8",
          "#previousStateName": "1.0 - [MSG] Contador inatividade",
          "traceparent": "00-5cafe8e84377da11cdd9c61c0367df03-e9ce7dcd88bd1f50-01",
          "#uniqueId": "c8f60c90-ba04-44d6-95b4-56014a0a84f0",
          "#date_processed": "1715870402856",
          "date_created": "1715870402848",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethraexcecao@msging.net/msging-application-builder-hosting-start-q4zpk",
          "#tunnel.originalTo": "2d83dd85-6336-4f13-8f90-ed7918ac1619@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-rl7bg;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "c8f60c90-ba04-44d6-95b4-56014a0a84f0",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-rl7bg",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0105246"
        }
      },
      {
        "id": "41b59d60-08c5-4ebe-8731-6cef05f690fc",
        "direction": "sent",
        "type": "text/plain",
        "content": "Qual é o seu endereço de *e-mail*?",
        "date": "2024-05-16T14:34:57.227Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "8.2- Pedir Email",
          "#stateId": "05accb02-41cb-4cf3-ba9e-9507c9c42ed9",
          "#messageId": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net-inputexpirationtime",
          "#previousStateId": "964576af-886f-44bc-92ef-af4fb8762ce7",
          "#previousStateName": "8.1- Resposta CPF para atendimento",
          "traceparent": "00-5cafe8e84377da11cdd9c61c0367df03-4d54df01c4250c26-01",
          "#uniqueId": "9cac7d34-4850-4bab-bea5-4dcb64d04d3c",
          "#date_processed": "1715870097209",
          "date_created": "1715870097198",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethramenu@msging.net/msging-application-builder-hosting-start-s9jqv",
          "#tunnel.originalTo": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-cm92l;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "9cac7d34-4850-4bab-bea5-4dcb64d04d3c",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-cm92l",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0231122"
        }
      },
      {
        "id": "f2d9c063-c0f3-4a09-8eb9-98c7f46be814",
        "direction": "sent",
        "type": "text/plain",
        "content": "Por favor, forneça o *CPF da pessoa que deseja atendimento*.",
        "date": "2024-05-16T14:29:55.455Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "8.0- CPF Ativo Pedir CPF Atendimento",
          "#stateId": "66119122-fb27-4f6d-8649-899e929d417a",
          "#messageId": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMDM2OTlCNjVGNjVGODc1QkFFRAA=",
          "#previousStateId": "e9658018-7c6e-4224-9af2-5484cd52f1c9",
          "#previousStateName": "[SCRIPT] Resposta CPF/CNPJ",
          "traceparent": "00-5cafe8e84377da11cdd9c61c0367df03-54a5c577e06b9772-01",
          "#uniqueId": "df81c20a-4e6f-4f5b-b16d-7631f115548b",
          "#date_processed": "1715869795449",
          "date_created": "1715869795440",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethramenu@msging.net/msging-application-builder-hosting-start-q4zpk",
          "#tunnel.originalTo": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-rl7bg;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "df81c20a-4e6f-4f5b-b16d-7631f115548b",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-rl7bg",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0099282"
        }
      },
      {
        "id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMDM2OTlCNjVGNjVGODc1QkFFRAA=",
        "direction": "received",
        "type": "text/plain",
        "content": "123456789999",
        "date": "2024-05-16T14:29:54.016Z",
        "status": "dispatched",
        "metadata": {
          "#wa.timestamp": "1715869792",
          "traceparent": "00-5cafe8e84377da11cdd9c61c0367df03-0e59469ea0d411d5-01",
          "$internalId": "a1b6698d-4fdc-46a2-b771-427ee1bd94fa",
          "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-t45hl",
          "#uniqueId": "a1b6698d-4fdc-46a2-b771-427ee1bd94fa",
          "#date_processed": "1715869794010",
          "date_created": "1715869794007",
          "$elapsedTimeToStorage": "00:00:00.0107727"
        }
      },
      {
        "id": "1372920a-aff3-40a6-9715-9cdffa800995",
        "direction": "sent",
        "type": "text/plain",
        "content": "Qual o *CPF do titular* do plano de saúde?",
        "date": "2024-05-16T14:29:39.926Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "[MSG]perguntando o CPF / CNPJ",
          "#stateId": "7c2cb5dc-74cd-406e-8c14-45375f96e0ee",
          "#messageId": "context:8d4c5f50-b006-4686-ba95-342f73fa524d",
          "#previousStateId": "53ad7529-3fea-4c00-b694-d4abc4e62e32",
          "#previousStateName": "1.0- Checar redirecionamento para bloco específico",
          "traceparent": "00-6ef73fcab8d24a10706bef9a2ee8d05d-8590f7709e86ee3f-01",
          "#uniqueId": "6b361186-258e-4053-be4c-5b623dca1f26",
          "#date_processed": "1715869779908",
          "date_created": "1715869779896",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethramenu@msging.net/msging-application-builder-hosting-start-ms2cm",
          "#tunnel.originalTo": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-qdqlq;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "6b361186-258e-4053-be4c-5b623dca1f26",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-qdqlq",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0243908"
        }
      },
      {
        "id": "51004191-b147-4038-b080-0d0b7bd5c441",
        "direction": "sent",
        "type": "text/plain",
        "content": "Verificamos que o CPF digitado não corresponde com a matrícula informada anteriormente. Poderia confirmar se o número digitado está correto e digitar novamente?",
        "date": "2024-05-16T14:29:38.426Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "7.6 - Matricula diferente do cpf",
          "#stateId": "353a3a5c-dc88-4d3b-b6c4-3947322342be",
          "#messageId": "context:476fb689-309e-4072-a9ee-aa86bc53a9f1",
          "#previousStateId": "84e24378-d4b1-486f-9cd9-e6fca5820451",
          "#previousStateName": "7.0 - [VARIABLE] Erro genérico",
          "traceparent": "00-6ef73fcab8d24a10706bef9a2ee8d05d-503b9e1e30d52673-01",
          "#uniqueId": "5facf641-e914-40aa-9dd8-d840fbde777b",
          "#date_processed": "1715869778420",
          "date_created": "1715869778410",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethraexcecao@msging.net/msging-application-builder-hosting-start-ms2cm",
          "#tunnel.originalTo": "2d83dd85-6336-4f13-8f90-ed7918ac1619@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-qdqlq;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "5facf641-e914-40aa-9dd8-d840fbde777b",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-qdqlq",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0092955"
        }
      },
      {
        "id": "b14c0163-0f73-4c79-93d3-b0b80a4d560c",
        "direction": "sent",
        "type": "text/plain",
        "content": "erro-matricula-cpf",
        "date": "2024-05-16T14:29:37.089Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "[REDIRECT] Cascata de Exceção",
          "#stateId": "ca56a202-8e8b-452d-8486-db0d32eff77d",
          "#messageId": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMDU1RkMxMkMwNjdBNkM4N0U0NwA=",
          "#previousStateId": "fallback",
          "#previousStateName": "Exceções",
          "traceparent": "00-6ef73fcab8d24a10706bef9a2ee8d05d-3c11fa52dcfd0b57-01",
          "#uniqueId": "fa362a1b-e433-4a93-91e1-7978d3dbb74d",
          "#date_processed": "1715869777079",
          "date_created": "1715869777065",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethramenu@msging.net/msging-application-builder-hosting-start-ms2cm",
          "#tunnel.originalTo": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-qdqlq;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "fa362a1b-e433-4a93-91e1-7978d3dbb74d",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-qdqlq",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0163740"
        }
      },
      {
        "id": "d5661730-e3b8-4c87-b27b-79968585ec2c",
        "direction": "sent",
        "type": "text/plain",
        "content": "false",
        "date": "2024-05-16T14:29:36.081Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "[REDIRECT] Cascata de Exceção",
          "#stateId": "ca56a202-8e8b-452d-8486-db0d32eff77d",
          "#messageId": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMDU1RkMxMkMwNjdBNkM4N0U0NwA=",
          "#previousStateId": "fallback",
          "#previousStateName": "Exceções",
          "traceparent": "00-6ef73fcab8d24a10706bef9a2ee8d05d-499dbb437c6690e0-01",
          "#uniqueId": "701f9905-6a79-43b4-9de1-33c2bf3b296d",
          "#date_processed": "1715869776075",
          "date_created": "1715869776060",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethramenu@msging.net/msging-application-builder-hosting-start-ms2cm",
          "#tunnel.originalTo": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-qdqlq;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "701f9905-6a79-43b4-9de1-33c2bf3b296d",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-qdqlq",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0108403"
        }
      },
      {
        "id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMDU1RkMxMkMwNjdBNkM4N0U0NwA=",
        "direction": "received",
        "type": "text/plain",
        "content": "16095357667",
        "date": "2024-05-16T14:29:34.184Z",
        "status": "dispatched",
        "metadata": {
          "#wa.timestamp": "1715869772",
          "traceparent": "00-6ef73fcab8d24a10706bef9a2ee8d05d-e8399fa65fbac841-01",
          "$internalId": "734e7074-26f8-4834-82e0-d3ad378b7944",
          "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-52p8j",
          "#uniqueId": "734e7074-26f8-4834-82e0-d3ad378b7944",
          "#date_processed": "1715869774176",
          "date_created": "1715869774151",
          "$elapsedTimeToStorage": "00:00:00.0653353"
        }
      },
      {
        "id": "891c9e94-195b-4492-bff0-6edddfc2859d",
        "direction": "sent",
        "type": "text/plain",
        "content": "Qual o *CPF do titular* do plano de saúde?",
        "date": "2024-05-16T14:26:55.593Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "[MSG]perguntando o CPF / CNPJ",
          "#stateId": "7c2cb5dc-74cd-406e-8c14-45375f96e0ee",
          "#messageId": "context:24923f22-6e41-4800-8705-13d41df99d8b",
          "#previousStateId": "53ad7529-3fea-4c00-b694-d4abc4e62e32",
          "#previousStateName": "1.0- Checar redirecionamento para bloco específico",
          "traceparent": "00-e33feaee4483bcf7b7497ede65e78f0a-d53549ed4c9434c7-01",
          "#uniqueId": "dcfa99e0-9409-446b-8ba7-a4cfe5567fb1",
          "#date_processed": "1715869615586",
          "date_created": "1715869615576",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethramenu@msging.net/msging-application-builder-hosting-start-stsvg",
          "#tunnel.originalTo": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-2spzt;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "dcfa99e0-9409-446b-8ba7-a4cfe5567fb1",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-2spzt",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0106116"
        }
      },
      {
        "id": "99642a28-80ee-4b4d-8e37-a18413509b7e",
        "direction": "sent",
        "type": "text/plain",
        "content": "Prezado(a), não localizei o número da matricula... Por gentileza, digite novamente.",
        "date": "2024-05-16T14:26:54.121Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "7.2 -  [MSG] Erro matricula",
          "#stateId": "624ac386-5e06-4677-aaba-74206679f52e",
          "#messageId": "context:e25ce36d-9b0d-483e-8aa4-ff02583487fd",
          "#previousStateId": "84e24378-d4b1-486f-9cd9-e6fca5820451",
          "#previousStateName": "7.0 - [VARIABLE] Erro genérico",
          "traceparent": "00-e33feaee4483bcf7b7497ede65e78f0a-16e10e94032d3e17-01",
          "#uniqueId": "0a19af7f-d7df-4a34-87f9-3b61b68065bc",
          "#date_processed": "1715869614115",
          "date_created": "1715869614099",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethraexcecao@msging.net/msging-application-builder-hosting-start-stsvg",
          "#tunnel.originalTo": "2d83dd85-6336-4f13-8f90-ed7918ac1619@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-2spzt;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "0a19af7f-d7df-4a34-87f9-3b61b68065bc",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-2spzt",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0141828"
        }
      },
      {
        "id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMDU2MEE5QUI5MzI3Mzc0NjRBMAA=",
        "direction": "received",
        "type": "text/plain",
        "content": "16095357667",
        "date": "2024-05-16T14:26:52.375Z",
        "status": "dispatched",
        "metadata": {
          "#wa.timestamp": "1715869611",
          "traceparent": "00-e33feaee4483bcf7b7497ede65e78f0a-0141c405b8156941-01",
          "$internalId": "c35aeb2c-290f-468d-a058-c14c498b3843",
          "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-bl6sn",
          "#uniqueId": "c35aeb2c-290f-468d-a058-c14c498b3843",
          "#date_processed": "1715869612367",
          "date_created": "1715869612365",
          "$elapsedTimeToStorage": "00:00:00.0113056"
        }
      },
      {
        "id": "fb6c43a0-6b59-4c2c-a1c4-bf996332ec45",
        "direction": "sent",
        "type": "text/plain",
        "content": "Qual o *CPF do titular* do plano de saúde?",
        "date": "2024-05-16T14:26:49.094Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "[MSG]perguntando o CPF / CNPJ",
          "#stateId": "7c2cb5dc-74cd-406e-8c14-45375f96e0ee",
          "#messageId": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMDY0ODFGOTVERUIyQjgyOTM1NQA=",
          "#previousStateId": "1d7d0068-b064-4f92-ab25-d3d30d1b2dc5",
          "#previousStateName": "16.2- Resposta Matricula",
          "traceparent": "00-5f7e4f6a1cee356fab7099a5c089cc25-70d4bf1390f89c39-01",
          "#uniqueId": "43c1ab7d-94f1-4555-a37b-cd2fe655f8d8",
          "#date_processed": "1715869609076",
          "date_created": "1715869609064",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethramenu@msging.net/msging-application-builder-hosting-start-vdh7j",
          "#tunnel.originalTo": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-rrbk4;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "43c1ab7d-94f1-4555-a37b-cd2fe655f8d8",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-rrbk4",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0225868"
        }
      },
      {
        "id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMDY0ODFGOTVERUIyQjgyOTM1NQA=",
        "direction": "received",
        "type": "text/plain",
        "content": "5094",
        "date": "2024-05-16T14:26:47.666Z",
        "status": "dispatched",
        "metadata": {
          "#wa.timestamp": "1715869605",
          "traceparent": "00-5f7e4f6a1cee356fab7099a5c089cc25-fd760159e80e1e26-01",
          "$internalId": "ac743db1-d408-49b7-b122-5ecba4c1504a",
          "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-vfq6s",
          "#uniqueId": "ac743db1-d408-49b7-b122-5ecba4c1504a",
          "#date_processed": "1715869607659",
          "date_created": "1715869607657",
          "$elapsedTimeToStorage": "00:00:00.0107878"
        }
      },
      {
        "id": "b2d9caea-50b5-4f4a-b6b2-e76b3dde6b2e",
        "direction": "sent",
        "type": "text/plain",
        "content": "Qual o número da matrícula do funcionário?",
        "date": "2024-05-16T14:26:43.700Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "16.1- Pedir Matricula",
          "#stateId": "435acfba-48ae-4fbf-a2ff-4a83e3dd9334",
          "#messageId": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMDhBODc0Q0EzOEQ1Q0Y4MDI0NgA=",
          "#previousStateId": "d568bf38-5cef-421d-b3d0-3798f9b599d1",
          "#previousStateName": "3.1- Resposta Plano de Saude ou RH",
          "traceparent": "00-54243c312e2173214d02149a319a8456-e714d27ae121246c-01",
          "#uniqueId": "1814ac28-78aa-4ca2-b043-8b601ddef65f",
          "#date_processed": "1715869603694",
          "date_created": "1715869603686",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethramenu@msging.net/msging-application-builder-hosting-start-nfdkl",
          "#tunnel.originalTo": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-klhvb;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "1814ac28-78aa-4ca2-b043-8b601ddef65f",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-klhvb",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0082805"
        }
      },
      {
        "id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMDhBODc0Q0EzOEQ1Q0Y4MDI0NgA=",
        "direction": "received",
        "type": "application/vnd.lime.reply+json",
        "content": {
          "replied": {
            "type": "text/plain",
            "value": "Plano de Saúde"
          },
          "inReplyTo": {
            "id": "bc32cd9d-0036-4433-be57-6cf84785fc25",
            "type": "application/vnd.lime.select+json",
            "value": {
              "scope": "immediate",
              "text": "Por favor, escolha a opção desejada:",
              "options": [
                {
                  "text": "Plano de Saúde"
                },
                {
                  "text": "Atendimento RH"
                }
              ]
            },
            "direction": "sent"
          }
        },
        "date": "2024-05-16T14:26:42.343Z",
        "status": "dispatched",
        "metadata": {
          "#wa.timestamp": "1715869601",
          "#wa.context.from": "553432937100",
          "#wa.context.id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAERgSNzAwNTdCNzMxODdCNzBDNDg3AA==",
          "#wa.context.group_id": null,
          "#wa.forwarded": null,
          "#wa.frequently_forwarded": null,
          "#wa.interactive.button.id": "PlanodeSaúde",
          "#wa.message.id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAERgSNzAwNTdCNzMxODdCNzBDNDg3AA==",
          "traceparent": "00-54243c312e2173214d02149a319a8456-d8e9fe07915cc3af-01",
          "#inReplyToId": "wamid.HBgMNTUzNDk3ODAxODI5FQIAERgSNzAwNTdCNzMxODdCNzBDNDg3AA==",
          "#messageReferenceInternalID": "bdd7c9e5-f650-4ab1-b16a-897a202af713",
          "$internalId": "236c20b9-fae1-4e23-8df3-43a399fc64cf",
          "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-w2xjm",
          "#uniqueId": "236c20b9-fae1-4e23-8df3-43a399fc64cf",
          "#date_processed": "1715869602338",
          "date_created": "1715869602335",
          "$elapsedTimeToStorage": "00:00:00.0090510"
        }
      },
      {
        "id": "bc32cd9d-0036-4433-be57-6cf84785fc25",
        "direction": "sent",
        "type": "application/vnd.lime.select+json",
        "content": {
          "scope": "immediate",
          "text": "Por favor, escolha a opção desejada:",
          "options": [
            {
              "text": "Plano de Saúde"
            },
            {
              "text": "Atendimento RH"
            }
          ]
        },
        "date": "2024-05-16T14:26:37.617Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "3.0- Menu Plano Saude ou RH",
          "#stateId": "cf66bef4-4952-4850-b896-bba1154e11af",
          "#messageId": "context:6b103c80-e90e-48b6-a7b2-96a914301ab2",
          "#previousStateId": "64a46c6a-189a-4d3a-a681-7e96304b4c6c",
          "#previousStateName": "2.0- Boas Vindas",
          "traceparent": "00-d2a529f674b2e3c9b60cd5ff6e33a932-dc90558977a805bc-01",
          "#uniqueId": "bdd7c9e5-f650-4ab1-b16a-897a202af713",
          "#date_processed": "1715869597611",
          "date_created": "1715869597599",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethramenu@msging.net/msging-application-builder-hosting-start-q4zpk",
          "#tunnel.originalTo": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-rl7bg;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "bdd7c9e5-f650-4ab1-b16a-897a202af713",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-rl7bg",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0108310"
        }
      },
      {
        "id": "c6b5f240-4b5f-4b1f-9c60-daec4e708b8f",
        "direction": "sent",
        "type": "text/plain",
        "content": "Ao continuar com este atendimento, você expressa concordância com a nossa política de privacidade, disponível no link abaixo em nosso site:\nhttps://www.aethra.com.br/br/policy/",
        "date": "2024-05-16T14:26:36.597Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "2.0- Boas Vindas",
          "#stateId": "64a46c6a-189a-4d3a-a681-7e96304b4c6c",
          "#messageId": "context:6b103c80-e90e-48b6-a7b2-96a914301ab2",
          "#previousStateId": "53ad7529-3fea-4c00-b694-d4abc4e62e32",
          "#previousStateName": "1.0- Checar redirecionamento para bloco específico",
          "traceparent": "00-d2a529f674b2e3c9b60cd5ff6e33a932-180d0f03a20e23d0-01",
          "#uniqueId": "fd6f363a-977b-4a7d-9cea-cf04a7aaaa07",
          "#date_processed": "1715869596590",
          "date_created": "1715869596581",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethramenu@msging.net/msging-application-builder-hosting-start-q4zpk",
          "#tunnel.originalTo": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-rl7bg;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "fd6f363a-977b-4a7d-9cea-cf04a7aaaa07",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-rl7bg",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0101833"
        }
      },
      {
        "id": "14db078a-f050-4d44-b969-1e19cf2535c3",
        "direction": "sent",
        "type": "text/plain",
        "content": "Seja bem-vindo(a) ao atendimento da *Aethra*",
        "date": "2024-05-16T14:26:35.590Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "2.0- Boas Vindas",
          "#stateId": "64a46c6a-189a-4d3a-a681-7e96304b4c6c",
          "#messageId": "context:6b103c80-e90e-48b6-a7b2-96a914301ab2",
          "#previousStateId": "53ad7529-3fea-4c00-b694-d4abc4e62e32",
          "#previousStateName": "1.0- Checar redirecionamento para bloco específico",
          "traceparent": "00-d2a529f674b2e3c9b60cd5ff6e33a932-1f1dc8950988bdd9-01",
          "#uniqueId": "6766bda4-b200-43e4-8074-2f8eff41a2d4",
          "#date_processed": "1715869595584",
          "date_created": "1715869595577",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethramenu@msging.net/msging-application-builder-hosting-start-q4zpk",
          "#tunnel.originalTo": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-rl7bg;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "6766bda4-b200-43e4-8074-2f8eff41a2d4",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-rl7bg",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0081898"
        }
      },
      {
        "id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMDY2M0VBM0VFQkYxMUFEQTlGQwA=",
        "direction": "received",
        "type": "text/plain",
        "content": "aethra",
        "date": "2024-05-16T14:26:33.419Z",
        "status": "dispatched",
        "metadata": {
          "#wa.timestamp": "1715869592",
          "traceparent": "00-d2a529f674b2e3c9b60cd5ff6e33a932-ac85e232e2213cdb-01",
          "$internalId": "5c7fe59b-d317-4591-ba83-9285cbcc06be",
          "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-t45hl",
          "#uniqueId": "5c7fe59b-d317-4591-ba83-9285cbcc06be",
          "#date_processed": "1715869593411",
          "date_created": "1715869593406",
          "$elapsedTimeToStorage": "00:00:00.0148814"
        }
      },
      {
        "id": "553d644d-210f-4a69-84dd-84671b23875d",
        "direction": "sent",
        "type": "text/plain",
        "content": "⚠️ *Atenção!* ⚠️\nEssa é uma área restrita para desenvolvedores. 👩‍💻\n\nSe você tem permissão para estar aqui digite a palavra chave para acesso ou se possuir um número cadastrado como administrador digite o número de telefone autorizado, caso contrario digite sair.",
        "date": "2024-05-16T14:26:30.144Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "Boas vindas",
          "#stateId": "welcome",
          "#messageId": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMDRCRDk1NkU5MzAxNDgwNDJGMAA=",
          "#previousStateId": "onboarding",
          "#previousStateName": "Início",
          "traceparent": "00-b4726dc13d1e0ee65e277216dc93ea53-d5209fcda5398327-01",
          "#uniqueId": "fa80c84b-74d2-4531-950c-d09068d996cd",
          "#date_processed": "1715869590137",
          "date_created": "1715869590120",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "chatbotprincipaltelek1@msging.net/msging-application-builder-hosting-start-nfdkl",
          "#tunnel.originalTo": "4e4b2711-be87-427b-8cc6-335cc86b1b0b@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-klhvb;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "fa80c84b-74d2-4531-950c-d09068d996cd",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-klhvb",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0103286"
        }
      },
      {
        "id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMDRCRDk1NkU5MzAxNDgwNDJGMAA=",
        "direction": "received",
        "type": "text/plain",
        "content": "ola",
        "date": "2024-05-16T14:26:29.065Z",
        "status": "dispatched",
        "metadata": {
          "#wa.timestamp": "1715869587",
          "traceparent": "00-b4726dc13d1e0ee65e277216dc93ea53-9cb567248239e2e0-01",
          "$internalId": "e0715a96-34d7-4c41-a040-194e7c9e808d",
          "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-w2xjm",
          "#uniqueId": "e0715a96-34d7-4c41-a040-194e7c9e808d",
          "#date_processed": "1715869589055",
          "date_created": "1715869589051",
          "$elapsedTimeToStorage": "00:00:00.0155488"
        }
      },
      {
        "id": "cd533eaa-eb10-4cbb-9fac-d6812fecfa20",
        "direction": "sent",
        "type": "text/plain",
        "content": "Qual o *CPF do titular* do plano de saúde?",
        "date": "2024-05-16T14:24:31.313Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "[MSG]perguntando o CPF / CNPJ",
          "#stateId": "7c2cb5dc-74cd-406e-8c14-45375f96e0ee",
          "#messageId": "context:71a7d4dc-5bd4-468d-acd6-5ff612ca0b5d",
          "#previousStateId": "53ad7529-3fea-4c00-b694-d4abc4e62e32",
          "#previousStateName": "1.0- Checar redirecionamento para bloco específico",
          "traceparent": "00-3f5bfce60541488025d8188bac473b7d-a41b09ab269f2976-01",
          "#uniqueId": "f5533fdd-d028-4eb3-8c52-7f2bb86623b5",
          "#date_processed": "1715869471307",
          "date_created": "1715869471295",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethramenu@msging.net/msging-application-builder-hosting-start-67r6z",
          "#tunnel.originalTo": "68ca509b-d249-406a-85ef-91885584a0af@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-vc6mm;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "f5533fdd-d028-4eb3-8c52-7f2bb86623b5",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-vc6mm",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0106901"
        }
      },
      {
        "id": "d6f28c67-6703-4393-8e27-af64b4628284",
        "direction": "sent",
        "type": "text/plain",
        "content": "Prezado(a), não localizei o número da matricula... Por gentileza, digite novamente.",
        "date": "2024-05-16T14:24:29.809Z",
        "status": "consumed",
        "metadata": {
          "#stateName": "7.2 -  [MSG] Erro matricula",
          "#stateId": "624ac386-5e06-4677-aaba-74206679f52e",
          "#messageId": "context:5f8a2078-e20d-4b50-bc90-a5e0154a9609",
          "#previousStateId": "84e24378-d4b1-486f-9cd9-e6fca5820451",
          "#previousStateName": "7.0 - [VARIABLE] Erro genérico",
          "traceparent": "00-3f5bfce60541488025d8188bac473b7d-2f7edfa4dbf29888-01",
          "#uniqueId": "0d1a75b4-316c-425b-9a11-0f5cadfad5e2",
          "#date_processed": "1715869469802",
          "date_created": "1715869469781",
          "#tunnel.owner": "telekrouter@msging.net",
          "#tunnel.originator": "5534997801829@wa.gw.msging.net",
          "#tunnel.originalFrom": "aethraexcecao@msging.net/msging-application-builder-hosting-start-67r6z",
          "#tunnel.originalTo": "2d83dd85-6336-4f13-8f90-ed7918ac1619@tunnel.msging.net",
          "$originator": "telekrouter@msging.net",
          "$claims": "Node=telekrouter@msging.net/msging-application-router-hosting-start-vc6mm;Identity=telekrouter@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
          "$internalId": "0d1a75b4-316c-425b-9a11-0f5cadfad5e2",
          "$originatorSessionRemoteNode": "start.master.hosting@msging.net/#msging-application-router-hosting-start-vc6mm",
          "#messageKind": "Response",
          "$elapsedTimeToStorage": "00:00:00.0170662"
        }
      },
      {
        "id": "wamid.HBgMNTUzNDk3ODAxODI5FQIAEhgWM0VCMDQ1QjBBMTUyMEVFNUVERjM4MQA=",
        "direction": "received",
        "type": "text/plain",
        "content": "16095357667",
        "date": "2024-05-16T14:24:28.040Z",
        "status": "dispatched",
        "metadata": {
          "#wa.timestamp": "1715869466",
          "traceparent": "00-3f5bfce60541488025d8188bac473b7d-b86b781064ab3dcf-01",
          "$internalId": "63bb7515-c903-49f6-8b96-52d6a59597c5",
          "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-bxrpm",
          "#uniqueId": "63bb7515-c903-49f6-8b96-52d6a59597c5",
          "#date_processed": "1715869468032",
          "date_created": "1715869468029",
          "$elapsedTimeToStorage": "00:00:00.0120018"
        }
      }
    ]
  },
  "method": "get",
  "status": "success",
  "id": "ff092afa-2fbf-4c52-a2ab-15eb17dadc2f",
  "from": "postmaster@msging.net/#msging-server-rtfc5",
  "to": "telekrouter@msging.net/!msging-server-rtfc5-ide0r7r4",
  "metadata": {
    "traceparent": "00-945a45ece2c5044bc42fb65167a0baf7-aeb8cba98619ff2e-01",
    "#command.uri": "lime://telekrouter@msging.net/threads/5534997801829@wa.gw.msging.net?$take=100"
  }
}
            

console.log(teste(userState))