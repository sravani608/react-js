/**
 * @flow
 */

'use strict';

/*
 * Flow types for the Babylon AST.
 */

// Abstract types. Something must extend these.

export type Comment = {
  type: 'CommentLine';
  _CommentLine: void;
  value: string;
  end: number;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
} | {
  type: 'CommentBlock';
  _CommentBlock: void;
  value: string;
  end: number;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
};

export type Declaration = {
  type: 'ClassBody';
  _ClassBody: void;
  body: Array<Node>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ClassDeclaration';
  _ClassDeclaration: void;
  body: ClassBody;
  id: ?Identifier;
  superClass: ?Expression;
  decorators: any;
  superTypeParameters: any;
  typeParameters: any;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'FunctionDeclaration';
  _FunctionDeclaration: void;
  body: BlockStatement;
  id: Identifier;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
  async: boolean;
  defaults: Array<?Expression>;
  expression: boolean;
  generator: boolean;
  params: Array<Pattern>;
  rest: ?Identifier;
  returnType: ?TypeAnnotation;
  typeParameters: ?TypeParameterDeclaration;
} | {
  type: 'MethodDefinition';
  _MethodDefinition: void;
  computed: boolean;
  key: Node;
  kind: 'constructor' | 'method' | 'get' | 'set';
  static: boolean;
  value: FunctionExpression;
  decorators: ?Array<Decorator>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'VariableDeclaration';
  _VariableDeclaration: void;
  declarations: Array<VariableDeclarator>;
  kind: 'var' | 'let' | 'const';
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ClassProperty';
  _ClassProperty: void;
  computed: boolean;
  key: Node;
  static: boolean;
  typeAnnotation: ?TypeAnnotation;
  value: ?Expression;
  decorators: Array<Decorator>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type Expression = {
  type: 'ArrayExpression';
  _ArrayExpression: void;
  elements: Array<?Node>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'AssignmentExpression';
  _AssignmentExpression: void;
  left: Pattern;
  operator: AssignmentOperator;
  right: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'AwaitExpression';
  _AwaitExpression: void;
  all: boolean;
  argument: ?Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'BinaryExpression';
  _BinaryExpression: void;
  left: Expression;
  operator: BinaryOperator;
  right: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'BindExpression';
  _BindExpression: void;
  callee: Node;
  object: Node;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'CallExpression';
  _CallExpression: void;
  arguments: Array<Node>;
  callee: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ClassExpression';
  _ClassExpression: void;
  body: ClassBody;
  id: ?Identifier;
  superClass: ?Expression;
  decorators: any;
  superTypeParameters: any;
  typeParameters: any;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ComprehensionExpression';
  _ComprehensionExpression: void;
  body: Expression;
  blocks: Array<ComprehensionBlock>;
  filter: ?Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ConditionalExpression';
  _ConditionalExpression: void;
  alternate: Expression;
  consequent: Expression;
  test: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'DoExpression';
  _DoExpression: void;
  body: Statement;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'FunctionExpression';
  _FunctionExpression: void;
  body: BlockStatement;
  id: ?Identifier;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
  async: boolean;
  defaults: Array<?Expression>;
  expression: boolean;
  generator: boolean;
  params: Array<Pattern>;
  rest: ?Identifier;
  returnType: ?TypeAnnotation;
  typeParameters: ?TypeParameterDeclaration;
} | {
  type: 'Identifier';
  _Identifier: void;
  name: string;
  typeAnnotation: ?TypeAnnotation;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'Literal';
  _Literal: void;
  raw: string;
  regex: ?{pattern: string, flags: string};
  value: ?(string | boolean | number | RegExp);
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'LogicalExpression';
  _LogicalExpression: void;
  left: Expression;
  operator: LogicalOperator;
  right: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'MemberExpression';
  _MemberExpression: void;
  computed: boolean;
  object: Expression;
  property: Node;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'NewExpression';
  _NewExpression: void;
  arguments: Array<Node>;
  callee: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ObjectExpression';
  _ObjectExpression: void;
  properties: Array<Node>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'SequenceExpression';
  _SequenceExpression: void;
  expression: Array<Expression>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'TaggedTemplateExpression';
  _TaggedTemplateExpression: void;
  quasi: TemplateLiteral;
  tag: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'TemplateLiteral';
  _TemplateLiteral: void;
  expressions: Array<Expression>;
  quasis: Array<TemplateElement>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ThisExpression';
  _ThisExpression: void;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'UnaryExpression';
  _UnaryExpression: void;
  argument: Expression;
  operator: UnaryOperator;
  prefix: true;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'UpdateExpression';
  _UpdateExpression: void;
  argument: Expression;
  operator: UpdateOperator;
  prefix: boolean;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'YieldExpression';
  _YieldExpression: void;
  argument: ?Expression;
  delegate: boolean;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'TypeCastExpression';
  _TypeCastExpression: void;
  expression: Expression;
  typeAnnotation: TypeAnnotation;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'JSXElement';
  _JSXElement: void;
  children: Array<Node>;
  closingElement: ?JSXClosingElement;
  openingElement: JSXOpeningElement;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'JSXEmptyExpression';
  _JSXEmptyExpression: void;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'JSXExpressionContainer';
  _JSXExpressionContainer: void;
  expression: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'JSXMemberExpression';
  _JSXMemberExpression: void;
  computed: boolean;
  object: Node;
  property: JSXIdentifier;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type Function = {
  type: 'ArrowFunctionExpression';
  _ArrowFunctionExpression: void;
  body: Node;
  id: ?Identifier;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
  async: boolean;
  defaults: Array<?Expression>;
  expression: boolean;
  generator: boolean;
  params: Array<Pattern>;
  rest: ?Identifier;
  returnType: ?TypeAnnotation;
  typeParameters: ?TypeParameterDeclaration;
} | {
  type: 'FunctionDeclaration';
  _FunctionDeclaration: void;
  body: BlockStatement;
  id: Identifier;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
  async: boolean;
  defaults: Array<?Expression>;
  expression: boolean;
  generator: boolean;
  params: Array<Pattern>;
  rest: ?Identifier;
  returnType: ?TypeAnnotation;
  typeParameters: ?TypeParameterDeclaration;
} | {
  type: 'FunctionExpression';
  _FunctionExpression: void;
  body: BlockStatement;
  id: ?Identifier;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
  async: boolean;
  defaults: Array<?Expression>;
  expression: boolean;
  generator: boolean;
  params: Array<Pattern>;
  rest: ?Identifier;
  returnType: ?TypeAnnotation;
  typeParameters: ?TypeParameterDeclaration;
};

export type Node = {
  type: 'ArrayExpression';
  _ArrayExpression: void;
  elements: Array<?Node>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ArrayPattern';
  _ArrayPattern: void;
  elements: Array<?Node>;
  typeAnnotation: ?TypeAnnotation;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ArrowFunctionExpression';
  _ArrowFunctionExpression: void;
  body: Node;
  id: ?Identifier;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
  async: boolean;
  defaults: Array<?Expression>;
  expression: boolean;
  generator: boolean;
  params: Array<Pattern>;
  rest: ?Identifier;
  returnType: ?TypeAnnotation;
  typeParameters: ?TypeParameterDeclaration;
} | {
  type: 'AssignmentExpression';
  _AssignmentExpression: void;
  left: Pattern;
  operator: AssignmentOperator;
  right: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'AssignmentPattern';
  _AssignmentPattern: void;
  left: Pattern;
  right: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'AwaitExpression';
  _AwaitExpression: void;
  all: boolean;
  argument: ?Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'BinaryExpression';
  _BinaryExpression: void;
  left: Expression;
  operator: BinaryOperator;
  right: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'BindExpression';
  _BindExpression: void;
  callee: Node;
  object: Node;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'BlockStatement';
  _BlockStatement: void;
  body: Array<Statement>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'BreakStatement';
  _BreakStatement: void;
  label: ?Identifier;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'CallExpression';
  _CallExpression: void;
  arguments: Array<Node>;
  callee: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'CatchClause';
  _CatchClause: void;
  body: BlockStatement;
  param: Pattern;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ClassBody';
  _ClassBody: void;
  body: Array<Node>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ClassDeclaration';
  _ClassDeclaration: void;
  body: ClassBody;
  id: ?Identifier;
  superClass: ?Expression;
  decorators: any;
  superTypeParameters: any;
  typeParameters: any;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ClassExpression';
  _ClassExpression: void;
  body: ClassBody;
  id: ?Identifier;
  superClass: ?Expression;
  decorators: any;
  superTypeParameters: any;
  typeParameters: any;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ComprehensionBlock';
  _ComprehensionBlock: void;
  each: boolean;
  left: Pattern;
  right: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ComprehensionExpression';
  _ComprehensionExpression: void;
  body: Expression;
  blocks: Array<ComprehensionBlock>;
  filter: ?Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ConditionalExpression';
  _ConditionalExpression: void;
  alternate: Expression;
  consequent: Expression;
  test: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ContinueStatement';
  _ContinueStatement: void;
  label: ?Identifier;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'Decorator';
  _Decorator: void;
  expression: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'DebuggerStatement';
  _DebuggerStatement: void;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'DoWhileStatement';
  _DoWhileStatement: void;
  body: Statement;
  test: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'DoExpression';
  _DoExpression: void;
  body: Statement;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'EmptyStatement';
  _EmptyStatement: void;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ExpressionStatement';
  _ExpressionStatement: void;
  expression: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'File';
  _File: void;
  program: Program;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ForInStatement';
  _ForInStatement: void;
  body: Statement;
  left: Node;
  right: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ForOfStatement';
  _ForOfStatement: void;
  body: Statement;
  left: Node;
  right: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ForStatement';
  _ForStatement: void;
  init: ?Node;
  test: ?Expression;
  update: ?Expression;
  body: Statement;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'FunctionDeclaration';
  _FunctionDeclaration: void;
  body: BlockStatement;
  id: Identifier;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
  async: boolean;
  defaults: Array<?Expression>;
  expression: boolean;
  generator: boolean;
  params: Array<Pattern>;
  rest: ?Identifier;
  returnType: ?TypeAnnotation;
  typeParameters: ?TypeParameterDeclaration;
} | {
  type: 'FunctionExpression';
  _FunctionExpression: void;
  body: BlockStatement;
  id: ?Identifier;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
  async: boolean;
  defaults: Array<?Expression>;
  expression: boolean;
  generator: boolean;
  params: Array<Pattern>;
  rest: ?Identifier;
  returnType: ?TypeAnnotation;
  typeParameters: ?TypeParameterDeclaration;
} | {
  type: 'Identifier';
  _Identifier: void;
  name: string;
  typeAnnotation: ?TypeAnnotation;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'IfStatement';
  _IfStatement: void;
  alternate: ?Statement;
  consequent: Statement;
  test: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ImportDefaultSpecifier';
  _ImportDefaultSpecifier: void;
  local: Node;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ImportNamespaceSpecifier';
  _ImportNamespaceSpecifier: void;
  local: Node;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ImportDeclaration';
  _ImportDeclaration: void;
  specifiers: Array<Node>;
  source: Literal;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ImportSpecifier';
  _ImportSpecifier: void;
  imported: Node;
  local: Node;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'LabeledStatement';
  _LabeledStatement: void;
  body: Statement;
  label: Identifier;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'Literal';
  _Literal: void;
  raw: string;
  regex: ?{pattern: string, flags: string};
  value: ?(string | boolean | number | RegExp);
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'LogicalExpression';
  _LogicalExpression: void;
  left: Expression;
  operator: LogicalOperator;
  right: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'MemberExpression';
  _MemberExpression: void;
  computed: boolean;
  object: Expression;
  property: Node;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'MetaProperty';
  _MetaProperty: void;
  meta: Node;
  property: Node;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'MethodDefinition';
  _MethodDefinition: void;
  computed: boolean;
  key: Node;
  kind: 'constructor' | 'method' | 'get' | 'set';
  static: boolean;
  value: FunctionExpression;
  decorators: ?Array<Decorator>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'NewExpression';
  _NewExpression: void;
  arguments: Array<Node>;
  callee: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'Noop';
  _Noop: void;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ObjectExpression';
  _ObjectExpression: void;
  properties: Array<Node>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ObjectPattern';
  _ObjectPattern: void;
  properties: Array<Node>;
  typeAnnotation: ?TypeAnnotation;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'Program';
  _Program: void;
  body: Array<Statement>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'Property';
  _Property: void;
  computed: boolean;
  key: Node;
  kind: 'init' | 'get' | 'set';
  method: boolean;
  shorthand: boolean;
  value: Node;
  decorators: ?Array<Decorator>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'RestElement';
  _RestElement: void;
  argument: Pattern;
  typeAnnotation: ?TypeAnnotation;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ReturnStatement';
  _ReturnStatement: void;
  argument: ?Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'SequenceExpression';
  _SequenceExpression: void;
  expression: Array<Expression>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'SpreadElement';
  _SpreadElement: void;
  argument: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'SpreadProperty';
  _SpreadProperty: void;
  argument: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'Super';
  _Super: void;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'SwitchCase';
  _SwitchCase: void;
  consequent: Array<Statement>;
  test: ?Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'SwitchStatement';
  _SwitchStatement: void;
  cases: Array<SwitchCase>;
  discriminant: Expression;
  lexical: boolean;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'TaggedTemplateExpression';
  _TaggedTemplateExpression: void;
  quasi: TemplateLiteral;
  tag: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'TemplateElement';
  _TemplateElement: void;
  tail: boolean;
  value: {cooked: string, raw: string};
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'TemplateLiteral';
  _TemplateLiteral: void;
  expressions: Array<Expression>;
  quasis: Array<TemplateElement>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ThisExpression';
  _ThisExpression: void;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ThrowStatement';
  _ThrowStatement: void;
  argument: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'TryStatement';
  _TryStatement: void;
  block: BlockStatement;
  finalizer: ?BlockStatement;
  guardedHandlers: Array<CatchClause>;
  handler: ?CatchClause;
  handlers: ?Array<CatchClause>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'UnaryExpression';
  _UnaryExpression: void;
  argument: Expression;
  operator: UnaryOperator;
  prefix: true;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'UpdateExpression';
  _UpdateExpression: void;
  argument: Expression;
  operator: UpdateOperator;
  prefix: boolean;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'VariableDeclaration';
  _VariableDeclaration: void;
  declarations: Array<VariableDeclarator>;
  kind: 'var' | 'let' | 'const';
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'VariableDeclarator';
  _VariableDeclarator: void;
  id: Pattern;
  init: ?Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'WhileStatement';
  _WhileStatement: void;
  body: Statement;
  test: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'WithStatement';
  _WithStatement: void;
  body: Statement;
  object: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'YieldExpression';
  _YieldExpression: void;
  argument: ?Expression;
  delegate: boolean;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ExportAllDeclaration';
  _ExportAllDeclaration: void;
  exported: Node;
  source: Node;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ExportDefaultDeclaration';
  _ExportDefaultDeclaration: void;
  declaration: Node;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ExportNamedDeclaration';
  _ExportNamedDeclaration: void;
  declaration: Node;
  source: Literal;
  specifiers: Array<Node>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ExportDefaultSpecifier';
  _ExportDefaultSpecifier: void;
  exported: Node;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ExportNamespaceSpecifier';
  _ExportNamespaceSpecifier: void;
  exported: Node;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ExportSpecifier';
  _ExportSpecifier: void;
  local: Node;
  exported: Node;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'AnyTypeAnnotation';
  _AnyTypeAnnotation: void;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ArrayTypeAnnotation';
  _ArrayTypeAnnotation: void;
  elementType: Type;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'BooleanLiteralTypeAnnotation';
  _BooleanLiteralTypeAnnotation: void;
  raw: string;
  value: boolean;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'BooleanTypeAnnotation';
  _BooleanTypeAnnotation: void;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ClassImplements';
  _ClassImplements: void;
  id: Identifier;
  typeParameters: ?TypeParameterInstantiation;
  superClass: ?Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ClassProperty';
  _ClassProperty: void;
  computed: boolean;
  key: Node;
  static: boolean;
  typeAnnotation: ?TypeAnnotation;
  value: ?Expression;
  decorators: Array<Decorator>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'DeclareClass';
  _DeclareClass: void;
  body: ObjectTypeAnnotation;
  extends: Array<InterfaceExtends>;
  id: Identifier;
  typeParameters: ?TypeParameterDeclaration;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'DeclareFunction';
  _DeclareFunction: void;
  id: Identifier;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'DeclareModule';
  _DeclareModule: void;
  body: BlockStatement;
  id: Node;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'DeclareVariable';
  _DeclareVariable: void;
  id: Identifier;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'FunctionTypeAnnotation';
  _FunctionTypeAnnotation: void;
  params: Array<FunctionTypeParam>;
  rest: ?FunctionTypeParam;
  returnType: Type;
  typeParameters: ?TypeParameterDeclaration;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'FunctionTypeParam';
  _FunctionTypeParam: void;
  name: Identifier;
  optional: boolean;
  typeAnnotation: Type;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'GenericTypeAnnotation';
  _GenericTypeAnnotation: void;
  id: Node;
  typeParameters: ?TypeParameterInstantiation;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'InterfaceExtends';
  _InterfaceExtends: void;
  id: Identifier;
  typeParameters: ?TypeParameterInstantiation;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'InterfaceDeclaration';
  _InterfaceDeclaration: void;
  body: ObjectTypeAnnotation;
  extends: Array<InterfaceExtends>;
  id: Identifier;
  typeParameters: ?TypeParameterDeclaration;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'IntersectionTypeAnnotation';
  _IntersectionTypeAnnotation: void;
  types: Array<Type>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'MixedTypeAnnotation';
  _MixedTypeAnnotation: void;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'NullableTypeAnnotation';
  _NullableTypeAnnotation: void;
  typeAnnotation: Type;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'NumberLiteralTypeAnnotation';
  _NumberLiteralTypeAnnotation: void;
  raw: string;
  value: number;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'NumberTypeAnnotation';
  _NumberTypeAnnotation: void;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'StringLiteralTypeAnnotation';
  _StringLiteralTypeAnnotation: void;
  raw: string;
  value: string;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'StringTypeAnnotation';
  _StringTypeAnnotation: void;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'TupleTypeAnnotation';
  _TupleTypeAnnotation: void;
  types: Array<Type>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'TypeofTypeAnnotation';
  _TypeofTypeAnnotation: void;
  argument: Type;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'TypeAlias';
  _TypeAlias: void;
  id: Identifier;
  right: Type;
  typeParameters: ?TypeParameterDeclaration;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'TypeAnnotation';
  _TypeAnnotation: void;
  typeAnnotation: Type;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'TypeCastExpression';
  _TypeCastExpression: void;
  expression: Expression;
  typeAnnotation: TypeAnnotation;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'TypeParameterDeclaration';
  _TypeParameterDeclaration: void;
  params: Array<Identifier>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'TypeParameterInstantiation';
  _TypeParameterInstantiation: void;
  params: Array<Type>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ObjectTypeAnnotation';
  _ObjectTypeAnnotation: void;
  callProperties: Array<ObjectTypeCallProperty>;
  indexers: Array<ObjectTypeIndexer>;
  properties: Array<ObjectTypeProperty>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ObjectTypeCallProperty';
  _ObjectTypeCallProperty: void;
  static: boolean;
  value: FunctionTypeAnnotation;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ObjectTypeIndexer';
  _ObjectTypeIndexer: void;
  id: Identifier;
  key: Type;
  value: Type;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ObjectTypeProperty';
  _ObjectTypeProperty: void;
  key: Node;
  optional: boolean;
  value: Type;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'QualifiedTypeIdentifier';
  _QualifiedTypeIdentifier: void;
  id: Identifier;
  qualification: Node;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'UnionTypeAnnotation';
  _UnionTypeAnnotation: void;
  types: Array<Type>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'VoidTypeAnnotation';
  _VoidTypeAnnotation: void;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'JSXAttribute';
  _JSXAttribute: void;
  name: Node;
  value: ?Node;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'JSXClosingElement';
  _JSXClosingElement: void;
  name: Node;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'JSXElement';
  _JSXElement: void;
  children: Array<Node>;
  closingElement: ?JSXClosingElement;
  openingElement: JSXOpeningElement;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'JSXEmptyExpression';
  _JSXEmptyExpression: void;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'JSXExpressionContainer';
  _JSXExpressionContainer: void;
  expression: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'JSXIdentifier';
  _JSXIdentifier: void;
  name: string;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'JSXMemberExpression';
  _JSXMemberExpression: void;
  computed: boolean;
  object: Node;
  property: JSXIdentifier;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'JSXNamespacedName';
  _JSXNamespacedName: void;
  name: JSXIdentifier;
  namespace: JSXIdentifier;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'JSXOpeningElement';
  _JSXOpeningElement: void;
  attributes: Array<Node>;
  name: Array<Node>;
  selfClosing: boolean;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'JSXSpreadAttribute';
  _JSXSpreadAttribute: void;
  argument: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type Pattern = {
  type: 'ArrayPattern';
  _ArrayPattern: void;
  elements: Array<?Node>;
  typeAnnotation: ?TypeAnnotation;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'AssignmentPattern';
  _AssignmentPattern: void;
  left: Pattern;
  right: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'Identifier';
  _Identifier: void;
  name: string;
  typeAnnotation: ?TypeAnnotation;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ObjectPattern';
  _ObjectPattern: void;
  properties: Array<Node>;
  typeAnnotation: ?TypeAnnotation;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'RestElement';
  _RestElement: void;
  argument: Pattern;
  typeAnnotation: ?TypeAnnotation;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type Statement = {
  type: 'BlockStatement';
  _BlockStatement: void;
  body: Array<Statement>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'BreakStatement';
  _BreakStatement: void;
  label: ?Identifier;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ContinueStatement';
  _ContinueStatement: void;
  label: ?Identifier;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'DoWhileStatement';
  _DoWhileStatement: void;
  body: Statement;
  test: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'EmptyStatement';
  _EmptyStatement: void;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ExpressionStatement';
  _ExpressionStatement: void;
  expression: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ForInStatement';
  _ForInStatement: void;
  body: Statement;
  left: Node;
  right: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ForOfStatement';
  _ForOfStatement: void;
  body: Statement;
  left: Node;
  right: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ForStatement';
  _ForStatement: void;
  init: ?Node;
  test: ?Expression;
  update: ?Expression;
  body: Statement;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'IfStatement';
  _IfStatement: void;
  alternate: ?Statement;
  consequent: Statement;
  test: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'LabeledStatement';
  _LabeledStatement: void;
  body: Statement;
  label: Identifier;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ReturnStatement';
  _ReturnStatement: void;
  argument: ?Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'SwitchStatement';
  _SwitchStatement: void;
  cases: Array<SwitchCase>;
  discriminant: Expression;
  lexical: boolean;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ThrowStatement';
  _ThrowStatement: void;
  argument: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'TryStatement';
  _TryStatement: void;
  block: BlockStatement;
  finalizer: ?BlockStatement;
  guardedHandlers: Array<CatchClause>;
  handler: ?CatchClause;
  handlers: ?Array<CatchClause>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'WhileStatement';
  _WhileStatement: void;
  body: Statement;
  test: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'WithStatement';
  _WithStatement: void;
  body: Statement;
  object: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'DeclareClass';
  _DeclareClass: void;
  body: ObjectTypeAnnotation;
  extends: Array<InterfaceExtends>;
  id: Identifier;
  typeParameters: ?TypeParameterDeclaration;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'DeclareFunction';
  _DeclareFunction: void;
  id: Identifier;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'DeclareModule';
  _DeclareModule: void;
  body: BlockStatement;
  id: Node;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'DeclareVariable';
  _DeclareVariable: void;
  id: Identifier;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'InterfaceDeclaration';
  _InterfaceDeclaration: void;
  body: ObjectTypeAnnotation;
  extends: Array<InterfaceExtends>;
  id: Identifier;
  typeParameters: ?TypeParameterDeclaration;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'TypeAlias';
  _TypeAlias: void;
  id: Identifier;
  right: Type;
  typeParameters: ?TypeParameterDeclaration;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type Type = {
  type: 'AnyTypeAnnotation';
  _AnyTypeAnnotation: void;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ArrayTypeAnnotation';
  _ArrayTypeAnnotation: void;
  elementType: Type;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'BooleanLiteralTypeAnnotation';
  _BooleanLiteralTypeAnnotation: void;
  raw: string;
  value: boolean;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'BooleanTypeAnnotation';
  _BooleanTypeAnnotation: void;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'FunctionTypeAnnotation';
  _FunctionTypeAnnotation: void;
  params: Array<FunctionTypeParam>;
  rest: ?FunctionTypeParam;
  returnType: Type;
  typeParameters: ?TypeParameterDeclaration;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'GenericTypeAnnotation';
  _GenericTypeAnnotation: void;
  id: Node;
  typeParameters: ?TypeParameterInstantiation;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'IntersectionTypeAnnotation';
  _IntersectionTypeAnnotation: void;
  types: Array<Type>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'MixedTypeAnnotation';
  _MixedTypeAnnotation: void;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'NullableTypeAnnotation';
  _NullableTypeAnnotation: void;
  typeAnnotation: Type;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'NumberLiteralTypeAnnotation';
  _NumberLiteralTypeAnnotation: void;
  raw: string;
  value: number;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'NumberTypeAnnotation';
  _NumberTypeAnnotation: void;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'StringLiteralTypeAnnotation';
  _StringLiteralTypeAnnotation: void;
  raw: string;
  value: string;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'StringTypeAnnotation';
  _StringTypeAnnotation: void;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'TupleTypeAnnotation';
  _TupleTypeAnnotation: void;
  types: Array<Type>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'ObjectTypeAnnotation';
  _ObjectTypeAnnotation: void;
  callProperties: Array<ObjectTypeCallProperty>;
  indexers: Array<ObjectTypeIndexer>;
  properties: Array<ObjectTypeProperty>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'UnionTypeAnnotation';
  _UnionTypeAnnotation: void;
  types: Array<Type>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
} | {
  type: 'VoidTypeAnnotation';
  _VoidTypeAnnotation: void;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

// Concrete Types. Nothing can extend these.

export type CommentLine = {
  type: 'CommentLine';
  _CommentLine: void;
  value: string;
  end: number;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
};

export type CommentBlock = {
  type: 'CommentBlock';
  _CommentBlock: void;
  value: string;
  end: number;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
};

// Babel concrete types.

export type ArrayExpression = {
  type: 'ArrayExpression';
  _ArrayExpression: void;
  elements: Array<?Node>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type ArrayPattern = {
  type: 'ArrayPattern';
  _ArrayPattern: void;
  elements: Array<?Node>;
  typeAnnotation: ?TypeAnnotation;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type ArrowFunctionExpression = {
  type: 'ArrowFunctionExpression';
  _ArrowFunctionExpression: void;
  body: Node;
  id: ?Identifier;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
  async: boolean;
  defaults: Array<?Expression>;
  expression: boolean;
  generator: boolean;
  params: Array<Pattern>;
  rest: ?Identifier;
  returnType: ?TypeAnnotation;
  typeParameters: ?TypeParameterDeclaration;
};

type AssignmentOperator =
  '=' |
  '+=' |
  '-=' |
  '*=' |
  '/=' |
  '%=' |
  '<<=' |
  '>>=' |
  '>>>=' |
  '|=' |
  '^=' |
  '&=';

export type AssignmentExpression = {
  type: 'AssignmentExpression';
  _AssignmentExpression: void;
  left: Pattern;
  operator: AssignmentOperator;
  right: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type AssignmentPattern = {
  type: 'AssignmentPattern';
  _AssignmentPattern: void;
  left: Pattern;
  right: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type AwaitExpression = {
  type: 'AwaitExpression';
  _AwaitExpression: void;
  all: boolean;
  argument: ?Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

type BinaryOperator =
  '==' |
  '!=' |
  '===' |
  '!==' |
  '<' |
  '<=' |
  '>' |
  '>=' |
  '<<' |
  '>>' |
  '>>>' |
  '+' |
  '-' |
  '*' |
  '/' |
  '%' |
  '&' |
  '|' |
  '^' |
  'in' |
  'instanceof' |
  '..';

export type BinaryExpression = {
  type: 'BinaryExpression';
  _BinaryExpression: void;
  left: Expression;
  operator: BinaryOperator;
  right: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

// TODO: What is this?
export type BindExpression = {
  type: 'BindExpression';
  _BindExpression: void;
  callee: Node;
  object: Node;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type BlockStatement = {
  type: 'BlockStatement';
  _BlockStatement: void;
  body: Array<Statement>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type BreakStatement = {
  type: 'BreakStatement';
  _BreakStatement: void;
  label: ?Identifier;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type CallExpression = {
  type: 'CallExpression';
  _CallExpression: void;
  arguments: Array<Node>;
  callee: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type CatchClause = {
  type: 'CatchClause';
  _CatchClause: void;
  body: BlockStatement;
  param: Pattern;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type ClassBody = {
  type: 'ClassBody';
  _ClassBody: void;
  body: Array<Node>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type ClassDeclaration = {
  type: 'ClassDeclaration';
  _ClassDeclaration: void;
  body: ClassBody;
  id: ?Identifier;
  superClass: ?Expression;
  decorators: any;
  superTypeParameters: any;
  typeParameters: any;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type ClassExpression = {
  type: 'ClassExpression';
  _ClassExpression: void;
  body: ClassBody;
  id: ?Identifier;
  superClass: ?Expression;
  decorators: any;
  superTypeParameters: any;
  typeParameters: any;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type ComprehensionBlock = {
  type: 'ComprehensionBlock';
  _ComprehensionBlock: void;
  each: boolean;
  left: Pattern;
  right: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type ComprehensionExpression = {
  type: 'ComprehensionExpression';
  _ComprehensionExpression: void;
  body: Expression;
  blocks: Array<ComprehensionBlock>;
  filter: ?Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type ConditionalExpression = {
  type: 'ConditionalExpression';
  _ConditionalExpression: void;
  alternate: Expression;
  consequent: Expression;
  test: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type ContinueStatement = {
  type: 'ContinueStatement';
  _ContinueStatement: void;
  label: ?Identifier;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

// TODO: Make this correct.
export type Decorator = {
  type: 'Decorator';
  _Decorator: void;
  expression: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type DebuggerStatement = {
  type: 'DebuggerStatement';
  _DebuggerStatement: void;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type DoWhileStatement = {
  type: 'DoWhileStatement';
  _DoWhileStatement: void;
  body: Statement;
  test: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

// TODO: Make this correct.
export type DoExpression = {
  type: 'DoExpression';
  _DoExpression: void;
  body: Statement;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type EmptyStatement = {
  type: 'EmptyStatement';
  _EmptyStatement: void;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type ExpressionStatement = {
  type: 'ExpressionStatement';
  _ExpressionStatement: void;
  expression: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type File = {
  type: 'File';
  _File: void;
  program: Program;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type ForInStatement = {
  type: 'ForInStatement';
  _ForInStatement: void;
  body: Statement;
  left: Node;
  right: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

// TODO: Make this correct.
export type ForOfStatement = {
  type: 'ForOfStatement';
  _ForOfStatement: void;
  body: Statement;
  left: Node;
  right: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type ForStatement = {
  type: 'ForStatement';
  _ForStatement: void;
  init: ?Node;
  test: ?Expression;
  update: ?Expression;
  body: Statement;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type FunctionDeclaration = {
  type: 'FunctionDeclaration';
  _FunctionDeclaration: void;
  body: BlockStatement;
  id: Identifier;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
  async: boolean;
  defaults: Array<?Expression>;
  expression: boolean;
  generator: boolean;
  params: Array<Pattern>;
  rest: ?Identifier;
  returnType: ?TypeAnnotation;
  typeParameters: ?TypeParameterDeclaration;
};

export type FunctionExpression = {
  type: 'FunctionExpression';
  _FunctionExpression: void;
  body: BlockStatement;
  id: ?Identifier;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
  async: boolean;
  defaults: Array<?Expression>;
  expression: boolean;
  generator: boolean;
  params: Array<Pattern>;
  rest: ?Identifier;
  returnType: ?TypeAnnotation;
  typeParameters: ?TypeParameterDeclaration;
};

export type Identifier = {
  type: 'Identifier';
  _Identifier: void;
  name: string;
  typeAnnotation: ?TypeAnnotation;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type IfStatement = {
  type: 'IfStatement';
  _IfStatement: void;
  alternate: ?Statement;
  consequent: Statement;
  test: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

// TODO: Make this correct.
export type ImportDefaultSpecifier = {
  type: 'ImportDefaultSpecifier';
  _ImportDefaultSpecifier: void;
  local: Node;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

// TODO: Make this correct.
export type ImportNamespaceSpecifier = {
  type: 'ImportNamespaceSpecifier';
  _ImportNamespaceSpecifier: void;
  local: Node;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

// TODO: Make this correct.
export type ImportDeclaration = {
  type: 'ImportDeclaration';
  _ImportDeclaration: void;
  specifiers: Array<Node>;
  source: Literal;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

// TODO: Make this correct.
export type ImportSpecifier = {
  type: 'ImportSpecifier';
  _ImportSpecifier: void;
  imported: Node;
  local: Node;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type LabeledStatement = {
  type: 'LabeledStatement';
  _LabeledStatement: void;
  body: Statement;
  label: Identifier;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type Literal = {
  type: 'Literal';
  _Literal: void;
  raw: string;
  regex: ?{pattern: string, flags: string};
  value: ?(string | boolean | number | RegExp);
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

type LogicalOperator = '||' | '&&';

export type LogicalExpression = {
  type: 'LogicalExpression';
  _LogicalExpression: void;
  left: Expression;
  operator: LogicalOperator;
  right: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type MemberExpression = {
  type: 'MemberExpression';
  _MemberExpression: void;
  computed: boolean;
  object: Expression;
  property: Node;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

// TODO: Make this correct.
export type MetaProperty = {
  type: 'MetaProperty';
  _MetaProperty: void;
  meta: Node;
  property: Node;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type MethodDefinition = {
  type: 'MethodDefinition';
  _MethodDefinition: void;
  computed: boolean;
  key: Node;
  kind: 'constructor' | 'method' | 'get' | 'set';
  static: boolean;
  value: FunctionExpression;
  decorators: ?Array<Decorator>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type NewExpression = {
  type: 'NewExpression';
  _NewExpression: void;
  arguments: Array<Node>;
  callee: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type Noop = {
  type: 'Noop';
  _Noop: void;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type ObjectExpression = {
  type: 'ObjectExpression';
  _ObjectExpression: void;
  properties: Array<Node>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type ObjectPattern = {
  type: 'ObjectPattern';
  _ObjectPattern: void;
  properties: Array<Node>;
  typeAnnotation: ?TypeAnnotation;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type Program = {
  type: 'Program';
  _Program: void;
  body: Array<Statement>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type Property = {
  type: 'Property';
  _Property: void;
  computed: boolean;
  key: Node;
  kind: 'init' | 'get' | 'set';
  method: boolean;
  shorthand: boolean;
  value: Node;
  decorators: ?Array<Decorator>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type RestElement = {
  type: 'RestElement';
  _RestElement: void;
  argument: Pattern;
  typeAnnotation: ?TypeAnnotation;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type ReturnStatement = {
  type: 'ReturnStatement';
  _ReturnStatement: void;
  argument: ?Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type SequenceExpression = {
  type: 'SequenceExpression';
  _SequenceExpression: void;
  expression: Array<Expression>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type SpreadElement = {
  type: 'SpreadElement';
  _SpreadElement: void;
  argument: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type SpreadProperty = {
  type: 'SpreadProperty';
  _SpreadProperty: void;
  argument: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type Super = {
  type: 'Super';
  _Super: void;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type SwitchCase = {
  type: 'SwitchCase';
  _SwitchCase: void;
  consequent: Array<Statement>;
  test: ?Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type SwitchStatement = {
  type: 'SwitchStatement';
  _SwitchStatement: void;
  cases: Array<SwitchCase>;
  discriminant: Expression;
  lexical: boolean;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type TaggedTemplateExpression = {
  type: 'TaggedTemplateExpression';
  _TaggedTemplateExpression: void;
  quasi: TemplateLiteral;
  tag: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type TemplateElement = {
  type: 'TemplateElement';
  _TemplateElement: void;
  tail: boolean;
  value: {cooked: string, raw: string};
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type TemplateLiteral = {
  type: 'TemplateLiteral';
  _TemplateLiteral: void;
  expressions: Array<Expression>;
  quasis: Array<TemplateElement>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type ThisExpression = {
  type: 'ThisExpression';
  _ThisExpression: void;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type ThrowStatement = {
  type: 'ThrowStatement';
  _ThrowStatement: void;
  argument: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type TryStatement = {
  type: 'TryStatement';
  _TryStatement: void;
  block: BlockStatement;
  finalizer: ?BlockStatement;
  guardedHandlers: Array<CatchClause>;
  handler: ?CatchClause;
  handlers: ?Array<CatchClause>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

type UnaryOperator = '-' | '+' | '!' | '~' | 'typeof' | 'void' | 'delete';

export type UnaryExpression = {
  type: 'UnaryExpression';
  _UnaryExpression: void;
  argument: Expression;
  operator: UnaryOperator;
  prefix: true;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

type UpdateOperator = '++' | '--';

export type UpdateExpression = {
  type: 'UpdateExpression';
  _UpdateExpression: void;
  argument: Expression;
  operator: UpdateOperator;
  prefix: boolean;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type VariableDeclaration = {
  type: 'VariableDeclaration';
  _VariableDeclaration: void;
  declarations: Array<VariableDeclarator>;
  kind: 'var' | 'let' | 'const';
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type VariableDeclarator = {
  type: 'VariableDeclarator';
  _VariableDeclarator: void;
  id: Pattern;
  init: ?Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type WhileStatement = {
  type: 'WhileStatement';
  _WhileStatement: void;
  body: Statement;
  test: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type WithStatement = {
  type: 'WithStatement';
  _WithStatement: void;
  body: Statement;
  object: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type YieldExpression = {
  type: 'YieldExpression';
  _YieldExpression: void;
  argument: ?Expression;
  delegate: boolean;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

// TODO: Make this correct.
export type ExportAllDeclaration = {
  type: 'ExportAllDeclaration';
  _ExportAllDeclaration: void;
  exported: Node;
  source: Node;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

// TODO: Make this correct.
export type ExportDefaultDeclaration = {
  type: 'ExportDefaultDeclaration';
  _ExportDefaultDeclaration: void;
  declaration: Node;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

// TODO: Make this correct.
export type ExportNamedDeclaration = {
  type: 'ExportNamedDeclaration';
  _ExportNamedDeclaration: void;
  declaration: Node;
  source: Literal;
  specifiers: Array<Node>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

// TODO: Make this correct.
export type ExportDefaultSpecifier = {
  type: 'ExportDefaultSpecifier';
  _ExportDefaultSpecifier: void;
  exported: Node;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

// TODO: Make this correct.
export type ExportNamespaceSpecifier = {
  type: 'ExportNamespaceSpecifier';
  _ExportNamespaceSpecifier: void;
  exported: Node;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

// TODO: Make this correct.
export type ExportSpecifier = {
  type: 'ExportSpecifier';
  _ExportSpecifier: void;
  local: Node;
  exported: Node;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type AnyTypeAnnotation = {
  type: 'AnyTypeAnnotation';
  _AnyTypeAnnotation: void;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type ArrayTypeAnnotation = {
  type: 'ArrayTypeAnnotation';
  _ArrayTypeAnnotation: void;
  elementType: Type;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type BooleanLiteralTypeAnnotation = {
  type: 'BooleanLiteralTypeAnnotation';
  _BooleanLiteralTypeAnnotation: void;
  raw: string;
  value: boolean;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type BooleanTypeAnnotation = {
  type: 'BooleanTypeAnnotation';
  _BooleanTypeAnnotation: void;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type ClassImplements = {
  type: 'ClassImplements';
  _ClassImplements: void;
  id: Identifier;
  typeParameters: ?TypeParameterInstantiation;
  superClass: ?Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type ClassProperty = {
  type: 'ClassProperty';
  _ClassProperty: void;
  computed: boolean;
  key: Node;
  static: boolean;
  typeAnnotation: ?TypeAnnotation;
  value: ?Expression;
  decorators: Array<Decorator>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type DeclareClass = {
  type: 'DeclareClass';
  _DeclareClass: void;
  body: ObjectTypeAnnotation;
  extends: Array<InterfaceExtends>;
  id: Identifier;
  typeParameters: ?TypeParameterDeclaration;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

// TODO: Make this correct.
export type DeclareFunction = {
  type: 'DeclareFunction';
  _DeclareFunction: void;
  id: Identifier;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type DeclareModule = {
  type: 'DeclareModule';
  _DeclareModule: void;
  body: BlockStatement;
  id: Node;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

// TODO: Make this correct.
export type DeclareVariable = {
  type: 'DeclareVariable';
  _DeclareVariable: void;
  id: Identifier;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type FunctionTypeAnnotation = {
  type: 'FunctionTypeAnnotation';
  _FunctionTypeAnnotation: void;
  params: Array<FunctionTypeParam>;
  rest: ?FunctionTypeParam;
  returnType: Type;
  typeParameters: ?TypeParameterDeclaration;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type FunctionTypeParam = {
  type: 'FunctionTypeParam';
  _FunctionTypeParam: void;
  name: Identifier;
  optional: boolean;
  typeAnnotation: Type;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type GenericTypeAnnotation = {
  type: 'GenericTypeAnnotation';
  _GenericTypeAnnotation: void;
  id: Node;
  typeParameters: ?TypeParameterInstantiation;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type InterfaceExtends = {
  type: 'InterfaceExtends';
  _InterfaceExtends: void;
  id: Identifier;
  typeParameters: ?TypeParameterInstantiation;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type InterfaceDeclaration = {
  type: 'InterfaceDeclaration';
  _InterfaceDeclaration: void;
  body: ObjectTypeAnnotation;
  extends: Array<InterfaceExtends>;
  id: Identifier;
  typeParameters: ?TypeParameterDeclaration;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type IntersectionTypeAnnotation = {
  type: 'IntersectionTypeAnnotation';
  _IntersectionTypeAnnotation: void;
  types: Array<Type>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type MixedTypeAnnotation = {
  type: 'MixedTypeAnnotation';
  _MixedTypeAnnotation: void;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type NullableTypeAnnotation = {
  type: 'NullableTypeAnnotation';
  _NullableTypeAnnotation: void;
  typeAnnotation: Type;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type NumberLiteralTypeAnnotation = {
  type: 'NumberLiteralTypeAnnotation';
  _NumberLiteralTypeAnnotation: void;
  raw: string;
  value: number;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type NumberTypeAnnotation = {
  type: 'NumberTypeAnnotation';
  _NumberTypeAnnotation: void;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type StringLiteralTypeAnnotation = {
  type: 'StringLiteralTypeAnnotation';
  _StringLiteralTypeAnnotation: void;
  raw: string;
  value: string;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type StringTypeAnnotation = {
  type: 'StringTypeAnnotation';
  _StringTypeAnnotation: void;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type TupleTypeAnnotation = {
  type: 'TupleTypeAnnotation';
  _TupleTypeAnnotation: void;
  types: Array<Type>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type TypeofTypeAnnotation = {
  type: 'TypeofTypeAnnotation';
  _TypeofTypeAnnotation: void;
  argument: Type;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type TypeAlias = {
  type: 'TypeAlias';
  _TypeAlias: void;
  id: Identifier;
  right: Type;
  typeParameters: ?TypeParameterDeclaration;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type TypeAnnotation = {
  type: 'TypeAnnotation';
  _TypeAnnotation: void;
  typeAnnotation: Type;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type TypeCastExpression = {
  type: 'TypeCastExpression';
  _TypeCastExpression: void;
  expression: Expression;
  typeAnnotation: TypeAnnotation;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type TypeParameterDeclaration = {
  type: 'TypeParameterDeclaration';
  _TypeParameterDeclaration: void;
  params: Array<Identifier>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type TypeParameterInstantiation = {
  type: 'TypeParameterInstantiation';
  _TypeParameterInstantiation: void;
  params: Array<Type>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type ObjectTypeAnnotation = {
  type: 'ObjectTypeAnnotation';
  _ObjectTypeAnnotation: void;
  callProperties: Array<ObjectTypeCallProperty>;
  indexers: Array<ObjectTypeIndexer>;
  properties: Array<ObjectTypeProperty>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type ObjectTypeCallProperty = {
  type: 'ObjectTypeCallProperty';
  _ObjectTypeCallProperty: void;
  static: boolean;
  value: FunctionTypeAnnotation;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type ObjectTypeIndexer = {
  type: 'ObjectTypeIndexer';
  _ObjectTypeIndexer: void;
  id: Identifier;
  key: Type;
  value: Type;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type ObjectTypeProperty = {
  type: 'ObjectTypeProperty';
  _ObjectTypeProperty: void;
  key: Node;
  optional: boolean;
  value: Type;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type QualifiedTypeIdentifier = {
  type: 'QualifiedTypeIdentifier';
  _QualifiedTypeIdentifier: void;
  id: Identifier;
  qualification: Node;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type UnionTypeAnnotation = {
  type: 'UnionTypeAnnotation';
  _UnionTypeAnnotation: void;
  types: Array<Type>;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type VoidTypeAnnotation = {
  type: 'VoidTypeAnnotation';
  _VoidTypeAnnotation: void;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type JSXAttribute = {
  type: 'JSXAttribute';
  _JSXAttribute: void;
  name: Node;
  value: ?Node;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type JSXClosingElement = {
  type: 'JSXClosingElement';
  _JSXClosingElement: void;
  name: Node;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type JSXElement = {
  type: 'JSXElement';
  _JSXElement: void;
  children: Array<Node>;
  closingElement: ?JSXClosingElement;
  openingElement: JSXOpeningElement;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type JSXEmptyExpression = {
  type: 'JSXEmptyExpression';
  _JSXEmptyExpression: void;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type JSXExpressionContainer = {
  type: 'JSXExpressionContainer';
  _JSXExpressionContainer: void;
  expression: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type JSXIdentifier = {
  type: 'JSXIdentifier';
  _JSXIdentifier: void;
  name: string;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type JSXMemberExpression = {
  type: 'JSXMemberExpression';
  _JSXMemberExpression: void;
  computed: boolean;
  object: Node;
  property: JSXIdentifier;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type JSXNamespacedName = {
  type: 'JSXNamespacedName';
  _JSXNamespacedName: void;
  name: JSXIdentifier;
  namespace: JSXIdentifier;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type JSXOpeningElement = {
  type: 'JSXOpeningElement';
  _JSXOpeningElement: void;
  attributes: Array<Node>;
  name: Array<Node>;
  selfClosing: boolean;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};

export type JSXSpreadAttribute = {
  type: 'JSXSpreadAttribute';
  _JSXSpreadAttribute: void;
  argument: Expression;
  end: number;
  innerComments: ?Array<Comment>;
  leadingComments: ?Array<Comment>;
  loc: {
    end: {column: number, line: number},
    start: {column: number, line: number},
  };
  start: number;
  trailingComments: ?Array<Comment>;
};
