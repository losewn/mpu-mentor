<?php

namespace Drupal\webhouse_core\Form;
use \Drupal\node\Entity\Node;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\webform\Entity\WebformSubmission;


/**
 * Class ContactParagraphForm.
 */
class ContactParagraphForm extends FormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'get_licence_guide_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state, $data = NULL) {
    $form['#attributes']['class'][] = 'label-as-placeholder';
    $form['#attributes']['id'][] = 'contact_form';

    $form['name'] = [
      '#type' => 'textfield',
      '#title' => $this->t("Ваше ім'я"),
      '#maxlength' => 64,
      '#size' => 64,
      '#required' => TRUE,
    ];
    $form['contact'] = array(
      '#type' => 'tel',
      '#title' => t('Телефон або електронна пошта'),
      '#required' => TRUE,
    );
    $form['message'] = array(
      '#type' => 'textarea',
      '#title' => t('Напишіть нам повідомлення'),
      '#required' => TRUE,
    );
    $form['submit'] = [
      '#type' => 'submit',
      '#value' => t('Отримати консультацію?'),
      '#prefix' => '<div class="bottom-block">',
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    parent::validateForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $values = $form_state->getValues();

    $webform_id = 'contact';

    $data = [
      'name' => $values['name'],
      'contact' => $values['contact'],
      'message' => $values['message'],
    ];

    $webform_submission = WebformSubmission::create([
      'webform_id' => $webform_id,
      'data' => $data,
    ]);
    $webform_submission->save();

    $message = [
      '#type' => 'markup',
      '#markup' => t("Дякую. Ми отримали Ваше повідомлення.. Очікуйте, ми зв'яжемось з Вами!"),
    ];
    \Drupal::messenger()->addStatus($message);
  }


}
