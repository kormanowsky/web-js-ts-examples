import {
  Button,
  Flex,
  Form,
  Input
} from 'antd';

import { Decor } from './components/Decor/Decor';

// Адрес для отправки
const sendUrl = 'http://localhost:3000/api/v3/congratulations';

// Отправляет запрос с fetch()
function sendViaFetch(url: string, data: Record<string, unknown>): void {
  fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
  })
      .then(() => alert('Fetch Успех!'))
      .catch((err) => alert(`Fetch Ошибка: ${err}`));
}

function sendCongratulation(data: Record<string, unknown>): void {
  sendViaFetch(sendUrl, data);
}

function App() {
  const year = new Date().getFullYear() + 1;

  const [form] = Form.useForm();

  return (
    <Flex style={{height: '100vh'}} justify='center' align='center'>
      <Form form={form} variant='outlined' onFinish={sendCongratulation}>
        <h1>Поздравьте с Новым {year} Годом!</h1>

        <Form.Item label="Имя отправителя" name="sender_name">
          <Input />
        </Form.Item>
        <Form.Item label="Имя получателя" name="recipient_name">
          <Input />
        </Form.Item>
        <Form.Item label="Текст" name="text">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Отправить поздравление
          </Button>
        </Form.Item>
      </Form>

      <Decor />
    </Flex>
  )
}

export default App
